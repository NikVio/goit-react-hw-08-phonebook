import { StyledLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'pages/hooks/useAuth';

import { HomeBox } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HomeBox>
      <div>
        <StyledLink to="/">Home</StyledLink>
      </div>
      {isLoggedIn && <StyledLink to="/contacts">Phonebook</StyledLink>}
    </HomeBox>
  );
};
