import { toast } from "react-toastify";

function toastWin() {
  return toast.info('You Win!', {
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

export default toastWin;