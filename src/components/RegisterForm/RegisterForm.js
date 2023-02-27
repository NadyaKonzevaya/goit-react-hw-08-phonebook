import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, InputName, Button } from './RegisterForm.styled.jsx';
// import { toast } from 'react-toastify';
import { Link } from 'components/LoginForm/LoginForm.styled.jsx';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // toast.success('You have successfully registered!');
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        UserName
        <InputName
          type="text"
          name="name"
          placeholder="Enter your name"
          required
          autoComplete="off"
        />
      </Label>
      <Label>
        Email
        <InputName
          type="email"
          name="email"
          placeholder="Enter your e-mail"
          required
        />
      </Label>
      <Label>
        Password
        <InputName
          type="password"
          name="password"
          minLength={5}
          placeholder="Enter your current password"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
      <Link href="/goit-react-hw-08-phonebook/login">
        Have an account already? Log in now!
      </Link>
    </Form>
  );
};
