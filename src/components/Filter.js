import React from 'react';

export const Filter = ({ type, setFilter }) => {
  const onFilter = () => setFilter(type);
  return <button onClick={onFilter}>{type}</button>;
};
