import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operations';
import { DivWrapper, UserName } from './UserMenu.styled';
import { Button } from 'components/Button.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => {
    toast.success('You have successfully logged out!');
    dispatch(logOut());
  };

  return (
    <DivWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </DivWrapper>
  );
};
