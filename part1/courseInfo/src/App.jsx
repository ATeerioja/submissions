const Header = (props) => <h1>{props.name}</h1>

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => 
      <p key={part.id}>
        {part.name} {part.exercises}
      </p>
      )}
    </div>
  )
}

const Sum = (props) => {
  let sum = 0
  props.parts.map(part =>
    sum += part.exercises
  )
  
  return (
    <div>
      <p>
        total of {sum} exercises
      </p>
    </div>
  )
}

const Course = ({ course }) => {
  const { id, name, parts} = course

  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Sum parts={parts} />
    </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }

    ]
  }

  return <Course course={course} />
}
export default App