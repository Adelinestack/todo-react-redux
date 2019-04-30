import React from 'react';
import Item from './Item';

const Todolist = ({ todolist = {}, setCheckedState }) => (
  <div>
    <ul>
      {Object.values(todolist).map((todo, i) => (
        <li key={i.toString()}>
          <Item {...todo} setCheckedState={setCheckedState} />
        </li>
      ))}
    </ul>
  </div>
);

export default Todolist;
