import React from 'react';
// import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { filterContact } from '../../redux/slice';
import { selectFilter } from '../../redux/filterSlice';
import { setFilter } from '../../redux/filterSlice'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);


  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value)); // Оновлюємо значення фільтру в Redux-сторі
  };

  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};