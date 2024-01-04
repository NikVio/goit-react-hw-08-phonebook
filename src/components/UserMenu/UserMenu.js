import { logOut } from 'components/Redux/auth/operations';
import { useAuth } from 'pages/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { UserButton, UserMenuBox } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());
  return (
    <UserMenuBox>
      <p>Welcome, {user.email}</p>
      <UserButton type="button" onClick={handleLogOut}>
        Logout
      </UserButton>
    </UserMenuBox>
  );
};
