import React, { FC } from "react";
import { CardType } from "../types";
import cn from "classnames";
import { formatString } from "../helpers/formatString";

type CardProps = {
	card: CardType;
	index: number;
	currentCardIndex: number;
	isDifficult: boolean;
	goToNextCard: () => void;
	toggleDifficultHandler: (id: number) => void;
};

const Card: FC<CardProps> = ({
	card,
	index,
	currentCardIndex,
	isDifficult,
	goToNextCard,
	toggleDifficultHandler
}) => {

  const [answerInput, setAnswerInput] = React.useState("");
  const [answerText, setAnswerText] = React.useState("");
	

	const getAnswerAndRightAnswer = (currentAnswer = answerInput) => {
		let answer = formatString(currentAnswer);
		let rightAnswer = formatString(card.en);
		return { answer, rightAnswer };
	};
	
	const rightAnswerHandler = () => {
		goToNextCard();
		setAnswerText("");
		let nexInput: HTMLInputElement | null = document.querySelector(
			`.input-${currentCardIndex + 1}`
		);
		if (nexInput !== null) nexInput.focus();
		setAnswerInput("");
	};

	
	const changeAnswerHandler = (e: React.FormEvent<HTMLInputElement>) => {
		setAnswerInput(e.currentTarget.value);
		const { answer, rightAnswer } = getAnswerAndRightAnswer(
			e.currentTarget.value
		);
		if (answer === rightAnswer) rightAnswerHandler();
	};

	const showAnswerHandler = () => {
		const answer = card.en;
		navigator.clipboard.writeText(answer);
		setAnswerText(answer);
	};

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
						onChange={() => toggleDifficultHandler(card.id)}
						checked={isDifficult}
						type="checkbox"
					/>{" "}
					Сложное
				</label>
				{answerText && <p className="answerText">{answerText}</p>}
			</form>
		</div>
	);
};

export default Card;
