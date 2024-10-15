import { useState } from 'react'

const Header = ({name}) => <h1>{name}</h1>

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
      <p> good {good} </p>
      <p> neutral {neutral} </p>  
      <p> bad {bad} </p> 
      
    </div>
  )
}

export default App