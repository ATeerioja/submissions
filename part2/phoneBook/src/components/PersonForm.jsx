const PersonForm = (props) => {
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: props.name,
      number: props.number
    }

    const names = props.persons.map(person => person.name)

    if(!names.includes(personObject.name)) {
      props.personsState(props.persons.concat(personObject))
      props.nameState('')
      props.numberState('')
    } else {
      alert(`${props.name} is already added to phonebook`)
    }
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    props.nameState(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    props.numberState(event.target.value)
  }

  return (
    <form onSubmit={addPerson}>
      <div>name: <input value={props.name} onChange={handlePersonChange}/></div>
      <div>number: <input value={props.number} onChange={handleNumberChange} /></div>
      <div><button type="submit">add</button></div>
    </form>
  )
}
  
export default PersonForm