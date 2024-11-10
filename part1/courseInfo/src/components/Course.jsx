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

export default Course;