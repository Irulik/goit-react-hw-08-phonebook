import React, { useEffect } from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, selectContacts } from '../../redux/slice';
import { fetchContacts } from 'redux/contacts/operations';
import { selectFilter } from '../../redux/filterSlice';

const getVisibleContacts = (contacts, filter) => {
  if (!Array.isArray(contacts) || filter === undefined) {
    return [];
  }
  console.log('contacts:', contacts);

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);
  
  const handleDelete = id => dispatch(deleteContact(id));

  // useEffect(() => {
  //   console.log('Contacts or filter changed:', visibleContacts);
  //   dispatch(fetchContacts());
  // }, [contacts, filter]);

  return (
    <ul className="contact_list">
      {visibleContacts.map(contact => (
        <li className="contact_list_element" key={contact.id}>
          <div className="contact_list_div">
            <p className="contact_list_p">• {contact.name}</p>
            <p className="contact_list_p">{contact.number}</p>
          </div>
          <button type='button' className="contact_list_button" onClick={() => handleDelete(contact.id)}>Delete{contact.id}</button>
        </li>
      ))}
    </ul>
  );
};

