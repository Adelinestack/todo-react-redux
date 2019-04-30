import React from 'react';

const Item = ({ id, name, isChecked, setCheckedState }) => {
  const onCheck = () => setCheckedState(id, name, !isChecked);
  return (
    <div>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={isChecked}
        onChange={onCheck}
      />
      <label htmlFor={name}>{name}</label>
    </div>
  );
};

export default Item;
