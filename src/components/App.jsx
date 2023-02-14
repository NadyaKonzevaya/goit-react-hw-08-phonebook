import { useEffect } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container } from "./App.styled";
import { fetchContacts } from "redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from "redux/contacts/selectors";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  
     return isRefreshing ? ("Fetching user data...") : (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm  />
      <h2>Contacts</h2>
      {isLoading && !error && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <Filter />
      <ContactList />
    </Container>
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
