import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

function errorResponHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      if (error.response.status === 404) message = "Something went wrong";
      else message = error.response.message;

      console.log(message);

      toast(message);

      return Promise.reject(error);
    }
  }
}

export default errorResponHandler;
