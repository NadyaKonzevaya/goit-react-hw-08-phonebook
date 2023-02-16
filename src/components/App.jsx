import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PropTypes from  "prop-types";
// import PhonebookForm from "./PhonebookForm";
// import ContactList from "./ContactList";
// import Filter from "./Filter";
// import { Container } from "./App.styled";
// import { fetchContacts } from "redux/contacts/operations";
import { useDispatch } from "react-redux";
// import { selectIsLoading, selectError } from "redux/contacts/selectors";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
// import { AppBar } from "./AppBar.js/AppBar";
import { Home } from "pages/Home";
import { Login } from "pages/Login";
import { Register } from "pages/Register";
import { Contacts } from "pages/Contacts";
import { SharedLayout } from "./SharedLayout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  
  
  return isRefreshing ? ("Fetching user data...") : (
    <Routes> 
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<RestrictedRoute component={Login} redirectTo="/contacts"/>}/>
        <Route path="/register" element={<RestrictedRoute component={Register} redirectTo="/contacts"/>}/>
        <Route path="/contacts" element={<PrivateRoute component={Contacts} redirectTo="/login" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
    

    //    <Container>
    //      <AppBar />
    //   <h1>Phonebook</h1>
    //   <PhonebookForm  />
    //   <h2>Contacts</h2>
    //   {/* {isLoading && !error && <p>Loading contacts...</p>}
    //   {error && <p>{error}</p>} */}
    //   <Filter />
    //   <ContactList />
    // </Container>
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
