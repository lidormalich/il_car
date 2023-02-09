import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function errorMessage(message: string) {
    toast.error(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
}