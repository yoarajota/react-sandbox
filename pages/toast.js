import React from 'react';
//npm install --save react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App(){
  const notify = () => toast("Wow so easy!");
  const notify2 = () => toast.error("Wow so easy!");
  const notify3 = () => toast.success("Wow so easy!");
  const notify4 = () => toast.info("Wow so easy!");
  const notify5 = () => toast.warning("Wow so easy!");
  const notify6 = () => toast('🦄 Wow so easy!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <button onClick={notify2}>Notify!</button>
      <button onClick={notify3}>Notify!</button>
      <button onClick={notify4}>Notify!</button>
      <button onClick={notify5}>Notify!</button>
      <button onClick={notify6}>Notify!</button>
      <ToastContainer />
    </div>
  );
}
