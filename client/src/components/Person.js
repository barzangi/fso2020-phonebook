import React from 'react';

const Person = ({ person, filterText, destroyPerson }) => {
  return (
    person.name.toLowerCase().includes(filterText.toLowerCase())
    ? <div>{person.name} {person.number} <button onClick={() => destroyPerson(person)}>delete</button></div>
    : null
  );
};

export default Person;