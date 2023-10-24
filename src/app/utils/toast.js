import { toast } from "react-toastify";

function toastError() {
  return toast.error('Invalid move!', {
    position: 'top-left',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: 'light',
  });
}

export default toastError;