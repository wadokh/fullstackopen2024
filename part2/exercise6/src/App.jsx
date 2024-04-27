import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newfilter, setFilter] = useState('')

  const addPerson = (event) =>{
    event.preventDefault();
    if(persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    console.log("test");
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1,
    }
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newfilter} setFilter={setFilter} />

      <h2>add a new</h2>

      <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} 
      newNumber={newNumber} handleNumberChange={handleNumberChange} />

      <h2>Numbers</h2>
      
      <Persons persons={persons} newfilter={newfilter} />
    </div>
  )
}

export default App