import { ContactForm } from 'components/ContactForm/ContactForm';

import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'components/Redux/contacts/operations';
import {
  selectContactsValue,
  selectError,
  selectIsLoading,
} from 'components/Redux/selectors';

import { useEffect } from 'react';
import { Comment } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsContainer, Container } from './Contacts.styled';

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsValue);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <ContactsContainer>
        <h2>Your contacts</h2>
        <ContactForm />
        <Filter />
        {isLoading && !error && (
          <Comment
            visible={true}
            height="80"
            width="80"
            ariaLabel="comment-loading"
            wrapperStyle={{}}
            wrapperClass="comment-wrapper"
            color="#fff"
            backgroundColor="#F4442E"
          />
        )}

        {contacts.length > 0 && <ContactList />}

        {error && <p>{error}</p>}
      </ContactsContainer>
    </Container>
  );
}
