import React from 'react';
import Person from './Person';

const Persons = ({ persons, filterText, destroyPerson }) => {
  return (
    <>
      <h2>Numbers</h2>
      {persons.map(person =>
        <Person
          key={person.name}
          person={person}
          filterText={filterText}
          destroyPerson={destroyPerson}
        />
      )}
    </>
  );
};

export default Persons;