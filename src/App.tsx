import React, { useState, useEffect } from 'react'
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
  const [selectedGroups,setSelectedGroups]      = useState<number[]>([]);

  const numberOfHundred = Math.trunc(data.length / 100) + 1;

  let selectGroups = [];

  for (let i = 1; i <= numberOfHundred; i++) {
    selectGroups.push(i);
  };

  const rightAnswerHandler = () => {
      setCurrentCardIndex(p => p + 1);
      setWrongTryCout(0);
      setAnswerText('');
      let nexInput: HTMLInputElement | null = document.querySelector(`.input-${currentCardIndex+ 1}`) 
      if (nexInput !== null ) nexInput?.focus();
      setAnswerInput('');
  };

  const getAnswerAndRightAnswer = (currentAnswer = answerInput) => {
    let answer = currentAnswer.replace(/[,\.;]/g, ',').replace(/[`']/g, '’').replace(/\u00a0/g, " ").toLowerCase().trim();
    let rightAnswer = cardToDraw[currentCardIndex].en.replace(/[,\.;]/g, ',').replace(/[`']/g, '’').replace(/\u00a0/g, " ").toLowerCase().trim();
    return { answer, rightAnswer };
  };

  const changeAnswerHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAnswerInput(e.currentTarget.value);
    const { answer, rightAnswer } = getAnswerAndRightAnswer(e.currentTarget.value); 
    if (answer === rightAnswer) rightAnswerHandler();
  }

  const showAnswerHandler = () => {
    const answer = cardToDraw[currentCardIndex].en;
    navigator.clipboard.writeText(answer);
    setAnswerText(answer);
  }

	const resetState = () => {
		setAnswerText('');
		setWrongTryCout(0);
		setCurrentCardIndex(0);
	}

  const updateCards = () => {
    let filteredData = [...data];
    if (selectedGroups.length != 0) {
      filteredData = filteredData.filter(( _, index ) => selectedGroups.includes(Math.trunc(index / 100) + 1));
    }
    switch(order) {
      case 'default':
        setCardToDraw(filteredData);
        break;
      case 'random':
        setCardToDraw(shuffleArray(filteredData, {copy: true}));
        break;
      case 'reverse':
        setCardToDraw([...filteredData].reverse());
        break;
    }
  };

	const setDefaultOrder = () => {
		setOrder('default');
		resetState();
	}

	const setRandomOrder = ()	=> {
		setOrder('random');
		resetState();
	}

	const setReverseOrder = () => {
		setOrder('reverse');
		resetState();
	}

  const toggleGroupItem = (index: number) => {
    if (selectedGroups.includes(index)) {
      setSelectedGroups(prev => prev.filter(i => i != index))
      return
    }
    setSelectedGroups(prev => [...prev, index])
  };

  useEffect(updateCards, [order, selectedGroups])

  return (
		<div className="wrapper">
			<div className="center">
				<div className="buttons">
				<h2 className='buttonsTitle'>Англиский для киски</h2>
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
        <div className="middleWrapper">
          <div className='cards'>
          <div className='card prev'></div>
          {cardToDraw.map((card, index) => {
            if (Math.abs(index - currentCardIndex) > 1) return
              return (
                <div
                  key={hashCode(card.rus + card.en)}
                  className={cn('card ', {
                    prev: index < currentCardIndex,
                    current: index === currentCardIndex,
                    next: index > currentCardIndex,
                  })}
                >
                  <form className='cardForm' onSubmit={(e) => {
                    e.preventDefault();
                    showAnswerHandler();
                  }}>
                  <h2 className='cardTitle'>{card.rus}</h2>
                  <span className='cardSubTitle'>{index + 1}</span>
                  <input className={`input-${index} inputAnswer`} value={answerInput} onChange={changeAnswerHandler}/>
                  <button className='defaultButton' type='submit'>Показать ответ</button>
                  {
                    answerText && <p className='answerText'>{answerText}</p>
                  }
                  </form>
                </div>
              )
          })}
          </div>
          <div className='selectGroups'>
            {selectGroups.map(i => (
              <label
                key={i} 
                className="selectGroupItem"
              >
                <input
                  onChange={() => toggleGroupItem(i)}
                  checked={selectedGroups.includes(i)}
                  type='checkbox'
                />
                {(i - 1) * 100 + 1}-{i*100}
              </label>)
            )}
          </div> 
        </div>
			</div>
		</div>
  )
}

export default App
