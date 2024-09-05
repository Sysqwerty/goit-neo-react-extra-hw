import { Backdrop, Box, Modal, Fade } from "@mui/material";
import css from "./ModalComponent.module.css";

const ModalComponent = ({ children, open, onClose }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box className={css.modal}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
