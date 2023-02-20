import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import PropTypes from  "prop-types";
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refreshUser } from "redux/auth/operations";
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
  
  useEffect(() => {
    dispatch(refreshUser());
    console.log()
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
    );
  
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
}
