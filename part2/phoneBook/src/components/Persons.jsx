import personService from '../services/persons'

const Persons = ({ persons }) => persons.map(person => 
<p key={person.name}>
  {person.name} {person.number} <button onClick={() =>
    (window.confirm("Do you want to remove this number?") ? personService.remove(person.id) : "")}>
      delete
    </button>
</p>)
  
export default Persons