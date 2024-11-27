import axios from 'axios'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

import { useState,useEffect } from 'react'

const App = () => {
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])



  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  useEffect(() => {
    axios 
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])


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