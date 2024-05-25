import { useState, useEffect } from 'react'
import personServices from './services/person'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Added from './components/Added'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newfilter, setFilter] = useState('')
  const [addMessage, setAddMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
      personServices
        .update(nameObject.id, newObject)
        .then(returnedPerson =>{
          setPersons(persons.map(person=>person.id!==nameObject.id ? person : returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error=>{
          setErrorMessage(`Information of ${newName} has already been removed from the server`)
          setPersons(persons.filter(n=>n.name!==newName))
        })
        setTimeout(()=>{
          setErrorMessage(null)
        },5000)
        return;
    }
    else{
      const nameObject = {
        name: newName,
        number: newNumber,
        id: `${persons.length+1}`,
      }

      personServices
        .create(nameObject)
        .then(returnedPerson =>{
          setAddMessage(
            `Added ${returnedPerson.name}`
          )
          setTimeout(()=>{
            setAddMessage(null)
          },5000)
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  const deletePerson = (id)=>{
    const person = persons.find(p=>p.id===id)
    if(confirm(`delete ${name}`)){
      personServices
        .deleteP(id)
        .then(returnedPerson=>{
          console.log(returnedPerson)
          setErrorMessage(
            `Deleted ${person.name}`
          )
          setTimeout(()=>{
            setErrorMessage(null)
          },5000)
          setPersons(persons.filter(p=>p.id!=person.id))
        })}
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Added message={addMessage} error={errorMessage} />

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