import { AppBar } from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Container } from './App.styled';
import { Suspense } from 'react';

export const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
