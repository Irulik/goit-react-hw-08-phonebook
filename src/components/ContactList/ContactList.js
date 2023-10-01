import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/slice';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilter } from '../../redux/filterSlice';
import css from './ContactList.module.css';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const handleDelete = async id => {
    try {
       // Відправлення запиту на сервер для видалення контакта
      await axios.delete(`/contacts/${id}`);
      
      // Оновлення контакту в LocalStorage після успішного видалення на сервері
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));
       
      // Оновлення списку контактів в Redux-сторі
      dispatch(deleteContact(id));
    } catch (error) {
      // Обробка помилки під час видалення на сервері
      console.error('Помилка видалення контакта на сервері:', error);
    }
  };

  useEffect(() => {
    // Отримання збереженого списку контактів з LocalStorage при завантаженні компонента
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      dispatch(fetchContacts(JSON.parse(storedContacts)));
    } else {
      dispatch(fetchContacts());
    }
  }, [dispatch]);

  return (
    <ul className={css.contact_list}>
      {visibleContacts.map(contact => (
        <li className={css.contact_list_element} key={contact.id}>
          <div className={css.contact_list_div}>
            <p className={css.contact_list_p}>{contact.name}</p>
            <p className={css.contact_list_p}>{contact.number}</p>
          </div>
          <button
            type='button'
            className={css.contact_list_button}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};