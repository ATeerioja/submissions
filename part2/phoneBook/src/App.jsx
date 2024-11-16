import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm 
        persons={persons}
        personsState={setPersons}
        name={newName}
        nameState={setNewName}
        number={newNumber}
        numberState={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App