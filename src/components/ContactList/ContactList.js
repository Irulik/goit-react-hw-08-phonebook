import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { selectFilter, selectAllContacts } from "../../redux/contacts/selectors";
import styles from "./ContactList.module.css"; 

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.centeredContainer}> 
      <ul>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={styles.contact_list_element}> 
            <div>
              <p className={styles.contact_list_p}>{contact.name}</p> 
              <p>{contact.number}</p>
            </div>
            <button onClick={() => handleDelete(contact.id)} className={styles.contact_list_button}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  );
};