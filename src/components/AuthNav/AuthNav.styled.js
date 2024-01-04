import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderList = styled.ul`
  display: flex;
  gap: 25px;
  font-size: 25px;
  font-weight: bold;
  margin-left: auto;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: orange;
  }
`;
