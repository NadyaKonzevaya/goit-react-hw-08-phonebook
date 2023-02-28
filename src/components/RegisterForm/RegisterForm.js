import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label, InputName } from './RegisterForm.styled.jsx';
import { Button } from 'components/Button.styled.jsx';
// import { toast } from 'react-toastify';
import { Link } from 'components/LoginForm/LoginForm.styled.jsx';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

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
    )
      .then(unwrapResult)
      .then(originalPromiseResult => {
        toast.success('You have successfully logged in!');
      })
      .catch(rejectedValueOrSerializedError => {
        if (rejectedValueOrSerializedError.response.status === 400) {
          toast.error('User creation error');
        } else if (rejectedValueOrSerializedError.response.status === 500) {
          toast.error('Server error');
        } else {
          toast.error(rejectedValueOrSerializedError.message);
        }
      });
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
