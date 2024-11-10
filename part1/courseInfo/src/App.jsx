const Header = (props) => <h2>{props.name}</h2>

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
  const initialValue = 0;
  const sum = props.parts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.exercises,
    initialValue,
  )
  
  return (
    <div>
      <p>
        total of {sum} exercises
      </p>
    </div>
  )
}

const Course = ({ courses }) => {

  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(course => 
        <div key={course.id}>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Sum parts={course.parts} />
        </div>
      )}

    </div>
  )

}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}
export default App