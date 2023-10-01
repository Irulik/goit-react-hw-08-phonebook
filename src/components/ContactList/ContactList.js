import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/slice';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectFilter } from '../../redux/filterSlice';

const getVisibleContacts = (contacts, filter) => {
  if (!Array.isArray(contacts) || filter === undefined) {
    return [];
  }

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
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

      // Оновлення контакти в LocalStorage після успішного видалення на сервері
      const updatedContacts = contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts', JSON.stringify(updatedContacts));

      // Оновлення список контактів в Redux-сторі
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
    <ul className="contact_list">
      {visibleContacts.map(contact => (
        <li className="contact_list_element" key={contact.id}>
          <div className="contact_list_div">
            <p className="contact_list_p">• {contact.name}</p>
            <p className="contact_list_p">{contact.number}</p>
          </div>
          <button
            type='button'
            className="contact_list_button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
