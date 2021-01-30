import React from 'react';

const PersonForm = ({ addPerson, nameInputHander, newName, numberInputHandler, newNumber }) => {
  return (
    <>
      <h2>Add a person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={nameInputHander} value={newName} />
        </div>
        <div>number: <input onChange={numberInputHandler} value={newNumber} /></div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;