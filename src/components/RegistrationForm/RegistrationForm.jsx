import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { register } from '@redux/auth/operations';
import { toastAlert } from '@utils/toast';
import css from './RegistrationForm.module.css';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  password: '',
};

const RegistrationFormSchema = Yup.object().shape({
  name: Yup.string('Enter your name')
    .min(3, 'To Short!')
    .max(50, 'Too Long!')
    .required('Name is required')
    .trim(),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
    .trim(),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(50, 'Password should be less then 50 characters length')
    .required('Password is required')
    .trim(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register({ ...values }))
      .unwrap()
      .then(() => {
        toastAlert.success('Registered successfully!');
        resetForm();
      })
      .catch(error => toastAlert.error(error));
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={RegistrationFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} placeholder="John Doe" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={emailId}>Email</label>
          <Field
            type="email"
            name="email"
            id={emailId}
            placeholder="test@gmail.com"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={passwordId}>Password</label>
          <Field
            type="password"
            name="password"
            id={passwordId}
            placeholder="********"
          />
          <ErrorMessage
            className={css.error}
            name="password"
            component="span"
          />
        </div>

        <Stack direction="row" spacing={2} className={css.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            className={css.btn}
          >
            Register
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={css.btn}
          >
            Reset
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
