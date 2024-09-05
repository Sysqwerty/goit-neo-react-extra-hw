import * as Yup from 'yup';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addContact, updateContact } from '@redux/contacts/operations';
import { toastAlert } from '@utils/toast';
import css from './ContactForm.module.css';

const INITIAL_FORM_DATA = {
  name: '',
  number: '',
};

const ContactFormSchema = Yup.object().shape({
  name: Yup.string('Enter contact name')
    .min(3, 'To Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .trim(),
  number: Yup.string()
    .min(3, 'To Short!')
    .max(50, 'Too Long!')
    .required('Required')
    .trim(),
});

const ContactForm = ({
  id = null,
  initialValues = INITIAL_FORM_DATA,
  isUpdate = false,
  onClose,
}) => {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, { resetForm }) => {
    const action = isUpdate
      ? updateContact({ id, ...values })
      : addContact({ ...values });

    dispatch(action)
      .unwrap()
      .then(() => {
        toastAlert.success(
          isUpdate
            ? 'Contact updated successfully!'
            : 'Contact added successfully!'
        );
        resetForm();
        if (onClose) onClose();
      })
      .catch(error => toastAlert.error(error));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.field}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} placeholder="John Doe" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.field}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="tel"
            name="number"
            id={numberId}
            placeholder="123-45-67"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <Stack direction="row" spacing={2} className={css.buttons}>
          <Button
            type="submit"
            variant="contained"
            color="success"
            className={css.btn}
          >
            {isUpdate ? 'Save' : 'Add contact'}
          </Button>
          <Button
            type="reset"
            variant="contained"
            color="secondary"
            className={css.btn}
            onClick={onClose}
          >
            {isUpdate ? 'Cancel' : 'Reset'}
          </Button>
        </Stack>
      </Form>
    </Formik>
  );
};

export default ContactForm;
