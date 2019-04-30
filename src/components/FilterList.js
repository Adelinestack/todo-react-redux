import React from 'react';
import { Filter } from './Filter';

const FiltersList = ({ setFilter }) => {
  return (
    <div>
      <Filter type="todo" setFilter={setFilter} />
      <Filter type="all" setFilter={setFilter} />
    </div>
  );
};

export default FiltersList;
