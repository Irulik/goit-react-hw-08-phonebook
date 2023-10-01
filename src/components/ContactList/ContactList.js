import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import {
  selectFilter,
  selectAllContacts
} from "../../redux/contacts/selectors";

const getVisibleContacts = (contacts, filter) => {
  if (!filter) {
    return contacts;
  } else {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  }
};

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const [search, setSearch] = useState(filter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul>
        {visibleContacts.map(contact =>
          <li key={contact.id}>
            <div>
              <p>
                {contact.name}
              </p>
              <p>
                {contact.number}
              </p>
            </div>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
};
