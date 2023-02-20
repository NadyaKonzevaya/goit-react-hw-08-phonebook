import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { DivWrapper, UserName } from './UserMenu.styled';
import { Button } from 'components/ContactList/ContactList.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <DivWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </DivWrapper>
  );
};
