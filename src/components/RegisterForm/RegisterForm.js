import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, InputName, Button } from './RegisterForm.styled.jsx';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
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
        <InputName type="text" name="name" />
      </Label>
      <Label>
        Email
        <InputName type="email" name="email" />
      </Label>
      <Label>
        Password
        <InputName type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
