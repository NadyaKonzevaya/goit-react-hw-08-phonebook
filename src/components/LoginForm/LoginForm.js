import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/operations';
import { Form, Label, InputName, Link } from './LoginForm.styled.jsx';
import { Button } from 'components/Button.styled';

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
    )
      .then(unwrapResult)
      .then(originalPromiseResult => {
        toast.success('You have successfully logged in!');
      })
      .catch(rejectedValueOrSerializedError => {
        if (rejectedValueOrSerializedError.response.status === 400) {
          toast.error('Login error');
        } else {
          toast.error(rejectedValueOrSerializedError.message);
        }
      });
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
