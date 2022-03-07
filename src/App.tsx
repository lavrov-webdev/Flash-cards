import React, { useState } from "react";
import cn from "classnames";
import "./App.css";
import { OrderType, SpaceName } from "./types";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./redux";
import {
	getDifficults,
	getFilteredWords,
} from "./redux/selectors/wordsSelectors";
import { formatString } from "./helpers/formatString";
import CustomRadioButton from "./components/CustomRadioButton";
import {
	changeActualSpace,
	changeOrder,
	toggleDifficult,
	toggleOnlyDifficult,
	toggleSelectedGroups,
} from "./redux/wordsSlice";

function App() {
	const dispatch = useAppDispatch();

	const { actualSpace } = useAppSelector(state => state.words);
	const { originList, order, difficults, onlyDifficult, selectedGroups } =
		useAppSelector((state) => state.words[state.words.actualSpace]);
	const filteredList = useSelector(getFilteredWords);
	const difficultsList = useSelector(getDifficults);

	const [answerInput, setAnswerInput] = useState("");
	const [answerText, setAnswerText] = useState("");
	const [currentCardIndex, setCurrentCardIndex] = useState(0);

	const numberOfHundred = Math.trunc(originList.length / 100) + 1;

	let selectGroups = [];

	for (let i = 1; i <= numberOfHundred; i++) {
		selectGroups.push(i);
	}

	const resetState = () => {
		setAnswerText("");
		setAnswerInput("");
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
	}

	const rightAnswerHandler = () => {
		setCurrentCardIndex((p) => p + 1);
		setAnswerText("");
		let nexInput: HTMLInputElement | null = document.querySelector(
			`.input-${currentCardIndex + 1}`
		);
		if (nexInput !== null) nexInput.focus();
		setAnswerInput("");
	};

	const getAnswerAndRightAnswer = (currentAnswer = answerInput) => {
		let answer = formatString(currentAnswer);
		let rightAnswer = formatString(filteredList[currentCardIndex].en);
		return { answer, rightAnswer };
	};

	const changeAnswerHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setAnswerInput(e.currentTarget.value);
		const { answer, rightAnswer } = getAnswerAndRightAnswer(
			e.currentTarget.value
		);
		if (answer === rightAnswer) rightAnswerHandler();
	};

	const showAnswerHandler = () => {
		const answer = filteredList[currentCardIndex].en;
		navigator.clipboard.writeText(answer);
		setAnswerText(answer);
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
								<div
									key={card.id}
									className={cn("card ", {
										prev: index < currentCardIndex,
										current: index === currentCardIndex,
										next: index > currentCardIndex,
									})}
								>
									<form
										className="cardForm"
										onSubmit={(e) => {
											e.preventDefault();
											showAnswerHandler();
										}}
									>
										<h2 className="cardTitle">{card.rus}</h2>
										<span className="cardSubTitle">{index + 1}</span>
										<input
											className={`input-${index} inputAnswer`}
											value={answerInput}
											onChange={changeAnswerHandler}
										/>
										<button className="defaultButton" type="submit">
											Показать ответ
										</button>
										<label>
											<input
												onChange={() => dispatch(toggleDifficult(card.id))}
												checked={difficults.includes(card.id)}
												type="checkbox"
											/>{" "}
											Сложное
										</label>
										{answerText && <p className="answerText">{answerText}</p>}
									</form>
								</div>
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
