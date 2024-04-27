import React from 'react'

const Persons = ({persons, newfilter}) => {
  return (
    <div>
      {persons.filter(p => p.name.toString().toLowerCase().startsWith(newfilter.toLowerCase())).
      map((person)=><div key={person.id}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default Persons
