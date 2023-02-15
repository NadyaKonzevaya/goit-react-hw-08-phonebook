import { AppBar } from './AppBar.js/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from './App.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};
