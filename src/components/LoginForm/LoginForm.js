import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, InputName, Link } from './LoginForm.styled.jsx';
import { Button } from 'components/ContactList/ContactList.styled.jsx';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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
          // autoComplete="username"
          placeholder="Enter your current password"
          required
        />
      </Label>
      <Button type="submit">Log in</Button>
      <Link href="/goit-react-hw-08-phonebook/register">
        Don't have an account? Register now!
      </Link>
    </Form>
  );
};
