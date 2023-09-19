import { toast,TypeOptions } from "react-toastify";

const Toastify=(msg:string, type:TypeOptions="success")=>{
toast(msg, {
    type:type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}
export default Toastify;