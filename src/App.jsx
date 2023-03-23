import { useEffect, useState } from 'react'
import './App.css'
import Trivia from './components/Trivia'
import Timer from './components/Timer'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState('0')
  const moneyPyramid = [
    { id: 1, amount: '500' },
    { id: 2, amount: '1 000' },
    { id: 3, amount: '2 000' },
    { id: 4, amount: '3 000' },
    { id: 5, amount: '5 000' },
    { id: 6, amount: '8 000' },
    { id: 7, amount: '10 000' },
    { id: 8, amount: '13 000' },
    { id: 9, amount: '15 000' },
    { id: 10, amount: '25 000' },
    { id: 11, amount: '50 000' },
    { id: 12, amount: '100 000' },
    { id: 13, amount: '250 000' },
    { id: 14, amount: '500 000' },
    { id: 15, amount: '1 000 000' },
  ].reverse()
  const questions = [
    {
      question:
        'In what children\'s game are participants chased by someone designated "It"?',
      content: ['Tag', 'Simon Says', 'Charades', 'Hopscotch'],
      correct: 0,
    },
    {
      question: 'On a radio, stations are changed by using what control?',
      content: ['Tuning', 'Volume', 'Bass', 'Treble'],
      correct: 0,
    },
    {
      question: 'Which material is most dense?',
      content: ['Silver', 'Styrofoam', 'Butter', 'Gold'],
      correct: 3,
    },
    {
      question: 'Which state in the United States is largest by area?',
      content: ['Alaska', 'California', 'Texas', 'Hawaii'],
      correct: 0,
    },
    {
      question: 'What is Aurora Borealis commonly known as?',
      content: [
        'Fairy Dust',
        'Northern Lights',
        'Book of ages',
        'a Game of Thrones main character',
      ],
      correct: 1,
    },
    {
      correct: 3,
      content: [
        'developed the telescope',
        'discovered four satellites of Jupiter',
        'discovered that the movement of pendulum produces a regular time measurement',
        'All of the above',
      ],
      question: 'Galileo was an Italian astronomer who',
    },
    {
      correct: 3,
      content: [
        'the infrared light kills bacteria in the body',
        'resistance power increases',
        'the pigment cells in the skin get stimulated and produce a healthy tan',
        'the ultraviolet rays convert skin oil into Vitamin D',
      ],
      question:
        'Exposure to sunlight helps a person improve his health because',
    },
    {
      correct: 0,
      content: [
        'a club or a local sport association for remarkable achievements',
        'amateur athlete, not necessarily an Olympian',
        'National Olympic Committee for outstanding work',
        'None of the above',
      ],
      question: 'Sir Thomas Fearnley Cup is awarded to',
    },
    {
      correct: 1,
      content: ['1968', '1929', '1901', '1965'],
      question: 'Oscar Awards were instituted in',
    },
    {
      correct: 2,
      content: ['1998', '1989', '1979', '1800'],
      question:
        'When did Margaret Thatcher became the first female Prime Minister of Britain?',
    },
    {
      correct: 2,
      content: ['15th April', '12th December', '1st May', '1st August'],
      question: "When is the International Workers' Day?",
    },
    {
      correct: 2,
      content: ['1962', '1963', '1964', '1965'],
      question: 'When did China test their first atomic device?',
    },
    {
      correct: 3,
      content: ['1904', '1905', '1908', '1909'],
      question: 'When did Commander Robert Peary discover the North Pole?',
    },
    {
      correct: 0,
      content: ['819/sq. km', '602/sq. km', '415/sq. km', '500/sq. km'],
      question: 'What is the population density of Kerala?',
    },
    {
      correct: 1,
      content: ['4 km', '25 km', '500 m to 9 km', '150 km'],
      question: "What is the range of missile 'Akash'?",
    },
  ]
  useEffect(() => {
    questionNumber > 5 && setEarned(moneyPyramid.find((m) => m.id === 5).amount)
    questionNumber > 10 &&
      setEarned(moneyPyramid.find((m) => m.id === 10).amount)
    questionNumber > 15 &&
      setEarned(moneyPyramid.find((m) => m.id === 15).amount)
    if (questionNumber > 15) setStop(true)
  }, [questionNumber])
  return (
    <div className='app'>
      <div className='main'>
        {stop ? (
          <h1 className='endText'>You earned: {earned}</h1>
        ) : (
          <>
            <div className='top'>
              <div className='timer'>
                <Timer
                  setStop={setStop}
                  questionNumber={questionNumber}
                />
              </div>
            </div>
            <div className='bottom'>
              <Trivia
                data={questions}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
                setEarned={setEarned}
              />
            </div>
          </>
        )}
      </div>
      <div className='pyramid'>
        <ul className='moneyList'>
          {moneyPyramid.map((e) => (
            <li
              className={
                questionNumber === e.id
                  ? 'moneyListItem active'
                  : 'moneyListItem'
              }
            >
              <span className='moneyListItemNumber'>{e.id}.</span>
              <span className='moneyListItemAmount'>{e.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
