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
  password: Yup.string().min(7, 'Too short').required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

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
          Username <Field name="name" type="name" variant="outline" />
          <ErrorMessage name="name" component="span" />
        </FormGroup>

        <FormGroup>
          Email <Field name="email" type="email" variant="outline" />
          <ErrorMessage name="email" component="span" />
        </FormGroup>

        <FormGroup>
          Password <Field name="password" type="password" variant="outline" />
          <ErrorMessage name="password" component="span" />
        </FormGroup>

        <FormBtn type="submit">Register</FormBtn>
      </Form>
    </Formik>
  );
};
