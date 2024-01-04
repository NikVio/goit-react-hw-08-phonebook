import { HeaderList, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <HeaderList>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </HeaderList>
  );
};
