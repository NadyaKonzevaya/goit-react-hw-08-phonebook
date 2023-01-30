import { useEffect } from "react";
import PropTypes from "prop-types";
import PhonebookForm from "./PhonebookForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Container } from "./App.styled";
import { fetchContacts } from "redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { getFullContacts } from "redux/selectors";

export function App() {
  const dispatch = useDispatch();
  const { value, isLoading, error } = useSelector(getFullContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
     return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm  />
         <h2>Contacts</h2>
          {isLoading && <p>Loading contacts...</p>}
         {error && <p>{error}</p>}
         {/* {value.length > 0 && JSON.stringify(value, null, 2)} */}
         <Filter />
        
      <ContactList />
    </Container>
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
