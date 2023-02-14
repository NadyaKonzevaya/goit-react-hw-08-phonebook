import { useDispatch } from "react-redux";
import { register } from "redux/auth/operations";

export const RegisterForm = () => {
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
        dispatch(
            register({
                name: e.currentTarget.elements.name.value,
                email: e.currentTarget.elements.email.value,
                password: e.currentTarget.elements.password.value,
            });
        e.currentTarget.reset();
        );
        

    }
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          UserName
          <input type="text" name="name" />
        </label>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
      </form>
    );
}