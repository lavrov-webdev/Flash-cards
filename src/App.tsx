import React, { useState } from "react";
import "./App.css";
import { OrderType, SpaceName } from "./types";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./redux";
import {
	getDifficults,
	getFilteredWords,
} from "./redux/selectors/wordsSelectors";
import CustomRadioButton from "./components/CustomRadioButton";
import Card from "./components/Card";
import {
	changeActualSpace,
	changeOrder,
	toggleDifficult,
	toggleOnlyDifficult,
	toggleSelectedGroups,
} from "./redux/wordsSlice";

function App() {
	const dispatch = useAppDispatch();

	const { actualSpace } = useAppSelector((state) => state.words);
	const { originList, order, difficults, onlyDifficult, selectedGroups } =
		useAppSelector((state) => state.words[state.words.actualSpace]);
	const filteredList = useSelector(getFilteredWords);
	const difficultsList = useSelector(getDifficults);

	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const numberOfHundred = Math.trunc(originList.length / 100) + 1;

	let selectGroups = [];

	for (let i = 1; i <= numberOfHundred; i++) {
		selectGroups.push(i);
	}

	const resetState = () => {
		setCurrentCardIndex(0);
	};

	const changeOrderHandler = (order: OrderType) => {
		dispatch(changeOrder(order));
		resetState();
	};

	const toggleOnlyDifficultHandler = () => {
		dispatch(toggleOnlyDifficult());
		resetState();
	};

	const toggleActualSpaceHandler = (space: SpaceName) => {
		resetState();
		dispatch(changeActualSpace(space));
	};

	const toggleDifficultHandler = (id: number) => {
		dispatch(toggleDifficult(id))
	}

	const goToNextCard = () => {
		setCurrentCardIndex((p) => p + 1);
	};

	return (
		<div className="wrapper">
			<div className="center">
				<div className="buttons">
					<h2 className="buttonsTitle">Англиский для киски</h2>
					<ul className="nameSpacesButtons">
						<CustomRadioButton
							clickHandler={() => toggleActualSpaceHandler("memrizeSpace")}
							checked={actualSpace === "memrizeSpace"}
							name="spaceName"
						>
							Memrize
						</CustomRadioButton>
						<CustomRadioButton
							clickHandler={() => toggleActualSpaceHandler("noteSpace")}
							checked={actualSpace === "noteSpace"}
							name="spaceName"
						>
							Notes
						</CustomRadioButton>
					</ul>
					<ul className="buttonsList">
						<CustomRadioButton
							clickHandler={() => changeOrderHandler("default")}
							checked={order === "default"}
							name="order"
						>
							По порядку
						</CustomRadioButton>
						<CustomRadioButton
							clickHandler={() => changeOrderHandler("random")}
							checked={order === "random"}
							name="order"
						>
							Вразнобой
						</CustomRadioButton>
						<CustomRadioButton
							clickHandler={() => changeOrderHandler("reverse")}
							checked={order === "reverse"}
							name="order"
						>
							Задом наперёд
						</CustomRadioButton>
					</ul>
				</div>
				<div className="middleWrapper">
					<div className="difficultGroup">
						<label style={{ marginBottom: 10, display: "block" }}>
							<input
								onChange={() => toggleOnlyDifficultHandler()}
								checked={onlyDifficult}
								type="checkbox"
								disabled={difficults.length === 0}
								style={{ marginRight: 5 }}
							/>
							Только сложные
						</label>
						<ul>
							{difficultsList.map((item) => (
								<li className="difficultItem">
									<div>{item.rus}</div>
									<div
										style={{ cursor: "pointer" }}
										onClick={() => dispatch(toggleDifficult(item.id))}
									>
										X
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="cards">
						<div className="card prev"></div>
						{filteredList.map((card, index) => {
							if (Math.abs(index - currentCardIndex) > 1) return;
							return (
								<Card
									card={card}
									currentCardIndex={currentCardIndex}
									goToNextCard={goToNextCard}
									index={index}
									key={card.id}
									isDifficult={difficults.includes(card.id)}
									toggleDifficultHandler={toggleDifficultHandler}
								/>
							);
						})}
					</div>
					<div className="selectGroups">
						{selectGroups.map((i) => (
							<label key={i} className="selectGroupItem">
								<input
									disabled={onlyDifficult}
									onChange={() => dispatch(toggleSelectedGroups(i))}
									checked={selectedGroups.includes(i)}
									type="checkbox"
								/>
								{(i - 1) * 100 + 1}-{i * 100}
							</label>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
