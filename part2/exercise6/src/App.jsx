import { useState, useEffect } from 'react'
import personServices from './services/person'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newfilter, setFilter] = useState('')

  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) =>{
    event.preventDefault();
    if(persons.map(person => person.name).includes(newName)){
      alert(`${newName} is already added to phonebook, replace the old number with a new one?`);
      const nameObject = persons.find(p=>p.name===newName)
      const newObject = {...nameObject}
      newObject.number = newNumber
      console.log(newObject);
      console.log(nameObject);
      personServices
        .update(nameObject.id, newObject)
        .then(returnedPerson =>{
          console.log(returnedPerson)
          setPersons(persons.map(person=>person.id!==nameObject.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        return;
    }
    else{
      console.log("test");
      const nameObject = {
        name: newName,
        number: newNumber,
        id: `${persons.length+1}`,
      }

      personServices
        .create(nameObject)
        .then(returnedPerson =>{
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id)=>{
    console.log(id);
    const name = persons.find(p=>p.id===id).name
    if(confirm(`delete ${name}`)){
      personServices
        .deleteP(id)
        .then(returnedPerson=>{
          setPersons(persons.filter(person=>person.id!=returnedPerson.id))
        })}
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
      
      <Persons persons={persons} newfilter={newfilter} deletePerson={deletePerson} />
    </div>
  )
}

export default App