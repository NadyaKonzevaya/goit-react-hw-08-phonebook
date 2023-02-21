import { useEffect, lazy } from "react";
// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PropTypes from  "prop-types";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
// import { Home } from "pages/Home";
// import { Login } from "pages/Login";
// import { Register } from "pages/Register";
// import { Contacts } from "pages/Contacts";
import { SharedLayout } from "./SharedLayout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { ToastContainer } from "react-toastify";

const HomePage = lazy(() => import('../pages/Home'));
// const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login'));
const RegisterPage = lazy(() => import('../pages/Register'));
const ContactsPage = lazy(() => import('../pages/Contacts'));
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFound'))


export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  useEffect(() => {
    dispatch(refreshUser());
    console.log()
  }, [dispatch]);
  
  return isRefreshing ? ("Fetching user data...") : (
    <>
      <ToastContainer />
      <Routes> 
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo="/contacts"/>}/>
          <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts"/>}/>
          <Route path="/contacts" element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
