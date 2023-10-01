import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/slice';
import { selectFilter } from '../../redux/filterSlice'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);


  const handleFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contacts..."
        name="filter"
      />
    </div>
  );
};
