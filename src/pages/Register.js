import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { ContactsContainer, Container } from './Contacts.styled';

export default function Register() {
  return (
    <Container>
      <ContactsContainer>
        <RegisterForm />
      </ContactsContainer>
    </Container>
  );
}
