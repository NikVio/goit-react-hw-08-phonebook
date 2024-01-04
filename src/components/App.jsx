import { useAuth } from 'pages/hooks/useAuth';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Comment } from 'react-loader-spinner';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from './Redux/auth/operations';
// import { GlobalStyle } from '../GlobalStyle';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { fetchContacts } from './Redux/operations';

// import {
//   selectContactsValue,
//   selectError,
//   selectIsLoading,
// } from './Redux/selectors';

// export const App = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContactsValue);
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Phonebook</h1>

//       <ContactForm />

//       <h2>Contacts</h2>

//       <Filter />
//       {isLoading && !error && (
//         <Comment
//           visible={true}
//           height="80"
//           width="80"
//           ariaLabel="comment-loading"
//           wrapperStyle={{}}
//           wrapperClass="comment-wrapper"
//           color="#fff"
//           backgroundColor="#F4442E"
//         />
//       )}

//       {contacts.length > 0 && <ContactList />}

//       {error && <p>{error}</p>}

//       <GlobalStyle />
//     </div>
//   );
// };

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const { isRefreshing } = useAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser);
  }, [dispatch]);

  return isRefreshing ? (
    'Fetching user data...'
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
