import { LoginForm } from 'components/LoginForm/LoginForm';
import { ContactsContainer, Container } from './Contacts.styled';

export default function Login() {
  return (
    <Container>
      <ContactsContainer>
        <LoginForm />
      </ContactsContainer>
    </Container>
  );
}
