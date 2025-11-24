// toast.js
import { toast, Bounce } from "react-toastify";

const defaultConfig = {
  position: "top-right",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
};

export const notifySuccess = (msg) => {
  toast.success(msg, defaultConfig);
};

export const notifyWarning = (msg) => {
  toast.warning(msg, defaultConfig);
};

export const notifyError = (msg) => {
  toast.error(msg, defaultConfig);
};

export const notifyInfo = (msg) => {
  toast.info(msg, defaultConfig);
};
