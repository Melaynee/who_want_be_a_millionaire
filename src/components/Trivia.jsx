import { useEffect, useState } from 'react'

const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }
  const handleClick = (a) => {
    setSelectedAnswer(a)
    setClassName('answer active')
    delay(1500, () => {
      setClassName(a === question?.correct ? 'answer correct' : 'answer wrong')
    })
    delay(6000, () => {
      if (a === question?.correct) {
        setQuestionNumber((prev) => prev + 1)
        setSelectedAnswer(null)
      } else setStop(true)
    })
  }
  useEffect(() => {
    setQuestion(data[questionNumber - 1])
  }, [data, questionNumber])
  return (
    <div className='trivia'>
      <div className='question'>{question?.question}</div>
      <div className='answers'>
        {question?.content.map((a, n) => (
          <div
            className={selectedAnswer === n ? className : 'answer'}
            onClick={() => handleClick(n)}
          >
            {a}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Trivia
