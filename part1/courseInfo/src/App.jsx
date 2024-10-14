const Header = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.num}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1} num={props.num1} />
      <Part name={props.part2} num={props.num2} />
      <Part name={props.part3} num={props.num3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.total}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', exercises: 10},
    {name: 'Using props to pass data', exercises: 7},
    {name: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header name={course} />
      <Content 
      part1={parts[0].name} num1={parts[0].exercises}
      part2={parts[1].name} num2={parts[1].exercises}
      part3={parts[2].name} num3={parts[2].exercises}
      />
      <Total total={parts[0].exercises+parts[1].exercises+parts[2].exercises} />
      
    </div>
  )
}

export default App