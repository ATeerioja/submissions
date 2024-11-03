import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

const Statistics = (props) => {
  
  const sum = props.good + props.neutral + props.bad 
  const average = ((props.good * 1 + props.neutral * 0 + props.bad * -1) / sum)
  const positive = (props.good / sum) * 100

  if(props.good == 0 && props.neutral == 0 && props.bad == 0) {
    return (
      <p> No feedback given </p>
    )
  }

  return (
  <>
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={sum} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={positive.toFixed(1)} unit="%"/>
      </tbody>
    </table>  
  </>
  )
}

const StatisticLine = (props) => {
  if(props.unit != null) {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} {props.unit}</td> 
      </tr> 
  )
  }
  
  return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td> 
      </tr> 
  )
}

const Button = (props) => {
  return (
  <>
    <button onClick={() => props.setGood(props.good + 1)}>good</button>
    <button onClick={() => props.setNeutral(props.neutral + 1)}>neutral</button>
    <button onClick={() => props.setBad(props.bad + 1)}>bad</button>
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
      <Button 
        good={good} setGood={setGood}
        neutral={neutral} setNeutral={setNeutral}
        bad={bad} setBad={setBad}
      />

      <Header name={header2} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App