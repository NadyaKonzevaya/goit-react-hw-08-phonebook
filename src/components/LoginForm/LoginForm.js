import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, InputName } from './LoginForm.styled.jsx';
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
        <InputName type="email" name="email" />
      </Label>
      <Label>
        Password
        <InputName type="password" name="password" />
      </Label>
      <Button type="submit">Log in</Button>
    </Form>
  );
};
