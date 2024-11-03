import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Statistics = (props) => {
  
  const sum = props.good + props.neutral + props.bad 
  const average = ((props.good * 1 + props.neutral * 0 + props.bad * -1) / sum)
  const positive = (props.good / sum) * 100

  return (
  <>
    <p> good {props.good} </p>
    <p> neutral {props.neutral} </p>
    <p> bad {props.bad} </p>
    <p> all {sum} </p>
    <p> average {average}</p>
    <p> positive {positive} %</p>
  </>  
  )
}

const App = () => {
  // save clicks of each button to its own state
  const header = "give feedback"
  const header2 = "statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <Header name={header} />
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Header name={header2} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App