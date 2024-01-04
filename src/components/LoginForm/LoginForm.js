import { Formik } from 'formik';

import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormBtn,
} from './LoginForm.styled';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from 'components/Redux/auth/operations';

const PhoneBookSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address'
    )
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  //   const handleCheckContact = values => {
  //     const checkContact = contacts.some(
  //       contact => contact.name.toLowerCase() === values.name.toLowerCase()
  //     );
  //     if (checkContact) {
  //       alert(`${values.name} is already in contacts`);
  //       return;
  //     }
  //     dispatch(addContacts(values));
  //   };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        dispatch(login(values));
      }}
    >
      <Form>
        <FormGroup>
          Email <Field name="email" />
          <ErrorMessage name="email" component="span" />
        </FormGroup>

        <FormGroup>
          Password <Field name="password" />
          <ErrorMessage name="password" component="span" />
        </FormGroup>

        <FormBtn type="submit">Log In</FormBtn>
      </Form>
    </Formik>
  );
};
