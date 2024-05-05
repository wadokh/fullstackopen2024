import React from 'react'

const Persons = ({persons, newfilter, deletePerson}) => {
  return (
    <div>
      {persons
      .filter(p => p.name.toString().toLowerCase()
      .startsWith(newfilter.toLowerCase()))
      .map((person)=>
      <div key={person.id}>{person.name} {person.number}
      <button onClick={()=>{deletePerson(person.id)}}>delete</button>
      </div>)}
    </div>
  )
}

export default Persons
