import { toast } from 'react-hot-toast';

const options = {
  position: 'top-right',
  duration: 3000,
};

export const toastAlert = {
  success: message => {
    toast.success(`🦄 ${message}`, options);
  },
  error: message => {
    toast.error(`🙄 ${message}`, options);
  },
};
