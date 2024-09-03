import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '@redux/contactsSlice';
import Contact from '@components/Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contacts}>
      {contacts.map(contact => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};

export default ContactList;
