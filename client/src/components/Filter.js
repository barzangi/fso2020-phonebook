import React from 'react';

const Filter = ({ filterText, filterTextInputHandler }) => (
  <div>
    filter show with <input type='text' onChange={filterTextInputHandler} value={filterText} />
  </div>
);

export default Filter;