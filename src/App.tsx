import React, { useState } from 'react'
import cn from 'classnames';
import shuffleArray from 'shuffle-array';
import './App.css'
import data from './data'
import { cardType, orderType } from './types';

function App() {

  const [answerInput, setAnswerInput]           = useState('');
  const [answerText, setAnswerText]             = useState('')
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [wrongTryCout, setWrongTryCout]         = useState(0);
  const [order, setOrder]                       = useState<orderType>('default')
  const [cardToDraw, setCardToDraw]             = useState<cardType[]>(data);

  const changeAnswerHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAnswerInput(e.currentTarget.value);
  }

  const answerCheckHandler = (card: cardType, index: number) => {
    let answer = answerInput.replace(/[,\.;]/, ',').toLowerCase().trim();
    let rightAnswer = card.en.replace(/[,\.;]/g, ',').toLowerCase().trim()
    if (answer === rightAnswer) {
      setCurrentCardIndex(p => p + 1);
      setWrongTryCout(0);
      setAnswerText('');
      let nexInput: HTMLInputElement | null = document.querySelector(`.input-${index + 1}`) 
      if (nexInput !== null ) nexInput?.focus();
    } else {
      setWrongTryCout(prev => prev + 1);
    }
    setAnswerInput('');
  }

  const showAnserHandler = (answer: string) => {
    setAnswerText(answer);
  }

	const setDefaultOrder = () => {
		setOrder('default');
		setCardToDraw(data);
	}

	const setRandomOrder = ()	=> {
		setOrder('random');
		setCardToDraw(shuffleArray(data, {copy: true}));
	}

	const setReverseOrder = () => {
		setOrder('reverse');
		setCardToDraw([...data].reverse())
	}


  return (
		<div className="wrapper">
			<h2>Порядок</h2>
			<div className="buttons">
				<ul>
					<li>
						<label onClick={setDefaultOrder}>
							<span>По порядку</span>
							<input checked={order === 'default'} name='order' type="radio" />
							</label>
						</li>
					<li>
						<label onClick={setRandomOrder}>
							<span>Вразнобой</span>
							<input checked={order === 'random'} name='order' type="radio" />
							</label>
						</li>
					<li>
						<label onClick={setReverseOrder}>
							<span>Задом наперёд</span>
							<input checked={order === 'reverse'} name='order' type="radio" />
							</label>
						</li>
				</ul>
			</div>
			<div className='cards'>
				<div className='card prev'></div>
				{cardToDraw.map((card, index) => {
					if (Math.abs(index - currentCardIndex) > 1) return
					return (
						<div key={index} className={cn('card ', {
							prev: index < currentCardIndex,
							current: index === currentCardIndex,
							next: index > currentCardIndex,
						})}>
							<h2>{card.rus}</h2>
							<form onSubmit={(e) => {
								e.preventDefault();
								answerCheckHandler(card, index);
							}}>
								<input className={`input-${index}`} value={answerInput} onChange={changeAnswerHandler}/>
								<button type='submit'>Проверить</button>
								{
									wrongTryCout >= 3 && <button onClick={() => showAnserHandler(card.en)}>Показать ответ</button>
								}
								{
									answerText && <p>{answerText}</p>
								}
							</form>
						</div>
					)
				})}
			</div>
		</div>
  )
}

export default App
