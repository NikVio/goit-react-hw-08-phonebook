import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'components/Redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUser),
  };
};
