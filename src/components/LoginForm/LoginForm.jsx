import * as Yup from 'yup';
import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { logIn } from '@redux/auth/operations';
import { toastAlert } from '@utils/toast';
import css from './LoginForm.module.css';

const INITIAL_FORM_DATA = {
  email: '',
  password: '',
};

const LoginFormSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
    .trim(),
  password: Yup.string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required')
    .trim(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn({ ...values }))
      .unwrap()
      .then(() => {
        toastAlert.success('Logged in successfully!');
        resetForm();
      })
      .catch(error => toastAlert.error(error));
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_DATA}
      validationSchema={LoginFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
            Log In
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

export default LoginForm;
