import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '@redux/contactsOps';
import { selectLoading } from '@redux/contactsSlice';
import ContactForm from '@components/ContactForm/ContactForm';
import SearchBox from '@components/SearchBox/SearchBox';
import ContactList from '@components/ContactList/ContactList';

const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <b>Request in progress...</b>}
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default App;
