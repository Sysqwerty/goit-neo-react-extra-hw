import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaUser, FaPhone, FaPencil, FaTrash } from 'react-icons/fa6';
import { Button, IconButton, Stack, Tooltip } from '@mui/material';
import ModalComponent from '@components/ModalComponent/ModalComponent';
import ContactForm from '@components/ContactForm/ContactForm';
import { deleteContact } from '@redux/contacts/operations';
import { toastAlert } from '@utils/toast';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDeleteOpen = () => setDeleteModalOpen(true);
  const handleDeleteClose = () => setDeleteModalOpen(false);

  const handleEditOpen = () => setEditModalOpen(true);
  const handleEditClose = () => setEditModalOpen(false);

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toastAlert.success('Contact deleted successfully!');
      })
      .catch(error => toastAlert.error(error));
  };

  return (
    <li className={css.contact}>
      <div className={css.contactData}>
        <div>
          <FaUser /> {name}
        </div>
        <div>
          <FaPhone /> {number}
        </div>
      </div>
      <Stack spacing={1}>
        <Tooltip title="Edit contact" placement="top">
          <IconButton
            aria-label="edit"
            color="primary"
            onClick={handleEditOpen}
          >
            <FaPencil className={css.icon} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete contact">
          <IconButton
            aria-label="delete"
            onClick={handleDeleteOpen}
            color="error"
          >
            <FaTrash className={css.icon} />
          </IconButton>
        </Tooltip>
      </Stack>

      <ModalComponent open={isDeleteModalOpen} onClose={handleDeleteClose}>
        <h2>
          Are you sure you want to delete <br />
          <b>{name}</b>?
        </h2>
        <Stack direction="row" spacing={2} className={css.buttons}>
          <Button onClick={handleDelete} variant="contained" color="error">
            Yes, Delete
          </Button>
          <Button onClick={handleDeleteClose} variant="outlined">
            Cancel
          </Button>
        </Stack>
      </ModalComponent>

      <ModalComponent open={isEditModalOpen} onClose={handleEditClose}>
        <ContactForm
          id={id}
          initialValues={{ name, number }}
          isUpdate={true}
          onClose={handleEditClose}
        />
      </ModalComponent>
    </li>
  );
};
export default Contact;
