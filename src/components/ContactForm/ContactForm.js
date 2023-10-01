import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import css from "./ContactForm.module.css";
import { addContact } from '../../redux/contacts/operations';
// import { nanoid } from 'nanoid';
import { selectContacts } from '../../redux/slice';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const isUnique = contacts.find((contact) => contact.number === number);

    if (isUnique) {
      alert('Цей номер вже існує в телефонній книзі.');
    } else {
      dispatch(addContact({ name, number: number }));
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Z]+([' \-]?[a-zA-Z ])*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </div>
      <div>
        <label>Number:</label>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="[+]?[0-9\-()\\s]+"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button className={css.btn} type="submit">Add Contact</button>
    </form>
  );
}
