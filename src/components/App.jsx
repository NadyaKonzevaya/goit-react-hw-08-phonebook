import { useEffect } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container } from "./App.styled";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getIsLoading, getError } from "redux/selectors";

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
     return (
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
