import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleForgotPassword = (event) => {
    event.preventDefault();
    //enviar email
    console.log(email);
  };
  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='border flex flex-col max-w-lg w-fit h-96 items-center justify-evenly px-6 py-4'>
        <h1>¿Tienes problemas para entrar?</h1>
        <p className='text-center'>
          Introduce tu correo electrónico y te enviaremos un enlace para que
          vuelvas a entrar en tu cuenta.
        </p>
        <form
          onSubmit={handleForgotPassword}
          className='flex flex-col items-center p-4 space-y-2 '
        >
          <label htmlFor=''>
            <input
              type='email'
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              value={email || ""}
              onChange={handleChange}
              placeholder='correo electrónico'
              required
            />
          </label>
          <button
            type='submit'
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-fit px-4 py-2 disabled:opacity-75 disabled:cursor-default disabled:hover:bg-blue-500'
            {...(email === "" && { disabled: true })}
          >
            Enviar enlace de acceso
          </button>
        </form>
        <div className='flex flex-row justify-around w-4/5 h-fit mx-auto space-x-1'>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
          <span className='grow-0 shrink-0'>o</span>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
        </div>
        <p className=' cursor-pointer text-blue-400 self-center'>
          <Link to='/signup'>Crear una cuenta nueva</Link>
        </p>
        <div className='border-t w-full flex justify-center'>
          <p className=' cursor-pointer  font-bold text-blue-400'>
            <Link to='/login'>Volver al inicio de sesión</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
