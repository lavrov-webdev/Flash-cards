import React, { useState } from 'react'
import cn from 'classnames';
import shuffleArray from 'shuffle-array';
import './App.css'
import data from './data'
import { cardType, orderType } from './types';

const hashCode = (s: string) => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)

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
    let answer = answerInput.replace(/[,\.;]/g, ',').toLowerCase().trim();
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

	const resetState = () => {
		setAnswerText('');
		setWrongTryCout(0);
		setCurrentCardIndex(0);
	}

	const setDefaultOrder = () => {
		setOrder('default');
		setCardToDraw(data);
		resetState();
	}

	const setRandomOrder = ()	=> {
		setOrder('random');
		setCardToDraw(shuffleArray(data, {copy: true}));
		resetState();
	}

	const setReverseOrder = () => {
		setOrder('reverse');
		setCardToDraw([...data].reverse())
		resetState();
	}

	let title = 'asd'


  return (
		<div className="wrapper">
			<div className="center">
				<div className="buttons">
				<h2 className='buttonsTitle'>{title}</h2>
					<ul className='buttonsList'>
						<li className='buttonsItem'>
							<label onClick={setDefaultOrder}>
								<input checked={order === 'default'} name='order' type="radio" />
								<span>По порядку</span>
							</label>
						</li>
						<li className='buttonsItem'>
							<label onClick={setRandomOrder}>
								<input checked={order === 'random'} name='order' type="radio" />
								<span>Вразнобой</span>
							</label>
						</li>
						<li className='buttonsItem'>
							<label onClick={setReverseOrder}>
								<input checked={order === 'reverse'} name='order' type="radio" />
								<span>Задом наперёд</span>
							</label>
						</li>
					</ul>
				</div>
				<div className='cards'>
					<div className='card prev'></div>
					{cardToDraw.map((card, index) => {
						if (Math.abs(index - currentCardIndex) > 1) return
						return (
							<div key={hashCode(card.rus + card.en)} className={cn('card ', {
								prev: index < currentCardIndex,
								current: index === currentCardIndex,
								next: index > currentCardIndex,
							})}>
								<form className='cardForm' onSubmit={(e) => {
									e.preventDefault();
									answerCheckHandler(card, index);
								}}>
									<h2 className='cardTitle'>{card.rus}</h2>
									<input className={`input-${index} inputAnswer`} value={answerInput} onChange={changeAnswerHandler}/>
									<button className='defaultButton checkButton' type='submit'>Проверить</button>
									{
										wrongTryCout >= 1 && <button className='defaultButton' onClick={() => showAnserHandler(card.en)}>Показать ответ</button>
									}
									{
										answerText && <p className='answerText'>{answerText}</p>
									}
								</form>
							</div>
						)
					})}
				</div>
			</div>
		</div>
  )
}

export default App
