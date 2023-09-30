import { useSelector } from 'react-redux';
import { Contact } from '../ContactList/ContactList';
import { selectAllContacts } from 'redux/contacts/selectors';
import css from './Filter.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={css.list}>
      {contacts.map(({ id, text }) => (
        <li key={id}>
          <Contact id={id} text={text} />
        </li>
      ))}
    </ul>
  );
};


// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(getFilter);

//   const handleChange = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <div>
//       <label className={css.filterLabel}>Find contacts by Name </label>
//       <input
//         className={css.filterName}
//         type="text"
//         name="filter"
//         placeholder="Enter filter"
//         value={filter}
//         onChange={handleChange}
//       />
//     </div>
//   );
// };