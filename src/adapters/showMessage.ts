import { toast } from "react-toastify";

export const showMessage = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast.info(message),
  warning: (message: string) => toast.warn(message),
  warn: (message: string) => toast.warn(message),
  dismiss: () => toast.dismiss(),
};
