import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Statistics = ({good, neutral, bad}) => {
  if (good + neutral + bad === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good} /> 
      <StatisticLine text="neutral" value={neutral} /> 
      <StatisticLine text="bad" value={bad} /> 
      <StatisticLine text="all" value={good + neutral + bad} /> 
      <StatisticLine text="average" value={(good - bad) / (good + neutral + bad)} /> 
      <StatisticLine text="positive" unit="%" value={good / (good + neutral + bad) * 100} /> 
    </>
  )
}

const StatisticLine = ({text, value, unit}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{unit}</td>
    </tr>    
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" handleClick={() => setGood(good + 1)} />
      <Button text="Neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" handleClick={() => setBad(bad + 1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App