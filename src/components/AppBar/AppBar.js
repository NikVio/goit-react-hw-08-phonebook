import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'pages/hooks/useAuth';
import { Header } from './AppBar.sryled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    </div>
  );
};
