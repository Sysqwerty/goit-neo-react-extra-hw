import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '@components/DocumentTitle';
import ContactsList from '@components/ContactsList/ContactsList';
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
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsList />
    </>
  );
};

export default ContactsPage;
