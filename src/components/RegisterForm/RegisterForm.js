import { Formik } from 'formik';

import {
  Form,
  Field,
  FormGroup,
  ErrorMessage,
  FormBtn,
} from './RegisterForm.styled';

import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'components/Redux/auth/operations';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too Short!').required('Required'),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      'Invalid email address'
    )
    .required('Required'),
});

export const RegisterForm = () => {
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
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={PhoneBookSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form>
        <FormGroup>
          Name <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Email <Field name="email" />
          <ErrorMessage name="email" component="span" />
        </FormGroup>

        <FormGroup>
          Password <Field name="password" />
          <ErrorMessage name="password" component="span" />
        </FormGroup>

        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Formik>
  );
};
