import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '@components/DocumentTitle';
import ContactList from '@components/ContactList/ContactList';
import ContactForm from '@components/ContactForm/ContactForm';
import SearchBox from '@components/SearchBox/SearchBox';
import { fetchContacts } from '@redux/contacts/operations';
import { selectLoading } from '@redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      <main>
        <ContactForm />
        <SearchBox />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </main>
    </>
  );
};

export default ContactsPage;
