import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contacts/slice'; 
import styles from './Filter.module.css'; 

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter); 

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
     <div className={styles.centeredContainer}>
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

