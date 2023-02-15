import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import ContactList from 'components/ContactList';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
};
