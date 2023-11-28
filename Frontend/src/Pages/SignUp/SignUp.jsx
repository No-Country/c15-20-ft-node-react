import { useEffect, useState } from "react";
import InputCheckbox from "../Login/components/InputCheckbox";
import { PSW_REGEX } from "./Register";

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const checkEmail = (event) => {
    const value = event.target.value;
    //validar en la base de datos si ya hay un email registrado
    setEmail(value);
  };
  const checkPassword = (event) => {
    const value = event.target.value;
    const validate = PSW_REGEX.test(value);
    if (!validate) {
      console.log("no cumple con la expresion regular");
    } else {
      setPassword(value);
    }
    //validar que tenga al menos 8 caracteres, una mayuscula, una minuscula y un numero
  };
  useEffect(() => {
    console.log(inputs);
  }, [inputs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    console.log(inputs);
  };

  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='border flex flex-col w-fit h-96 justify-evenly px-6 py-4'>
        <h1 className=' self-center text-lg font-bold'>Crea tu cuenta</h1>
        <div className='flex flex-row justify-around w-4/5 mx-auto'>
          <button className='border rounded bg-pink-300 px-4 py-1'>
            Google
          </button>
          <button className='border rounded bg-pink-300  px-4 py-1'>
            Facebook
          </button>
        </div>
        <div className='flex flex-row justify-around w-4/5 h-fit mx-auto space-x-1'>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
          <span className='grow-0 shrink-0'>o</span>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
        </div>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center p-4 space-y-2 '
        >
          <label htmlFor='username' className=' self-start  space-x-4'>
            <p className='inline w-1/4'>Nombre</p>
            <input
              type='text'
              id='username'
              name='username'
              value={inputs.username || ""}
              onChange={handleChange}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              required
            />
          </label>
          <label htmlFor='userlastname' className=' self-start  space-x-4'>
            <p className='inline w-1/4'>Apellido</p>
            <input
              type='text'
              id='userlastname'
              name='userlastname'
              value={inputs.userlastname || ""}
              onChange={handleChange}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              required
            />
          </label>
          <label htmlFor='useremail' className=' self-start  space-x-4'>
            <p className='inline w-1/4'>Email</p>
            <input
              type='email'
              id='useremail'
              name='useremail'
              value={email || ""}
              onChange={checkEmail}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              required
            />
          </label>
          <label htmlFor='userpassword' className='self-start  space-x-4'>
            <p className='inline'>Password</p>
            <input
              id='userpassword'
              name='userpassword'
              type={showPassword ? "text" : "password"}
              value={password || ""}
              onChange={checkPassword}
              className='border-b border-blue-500 outline-0 focus:border-pink-500'
              required
            />
          </label>
          <label htmlFor='repeatUserpassword' className='self-start  space-x-4'>
            <p className='inline'>Repite Password</p>
            <input
              id='repeatUserpassword'
              name='repeatUserpassword'
              type={showPassword ? "text" : "password"}
              value={inputs.repeatUserpassword || ""}
              onChange={handleChange}
              className='border-b border-blue-500 outline-0 focus:border-pink-500'
              required
            />
          </label>
          <InputCheckbox
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <button
            type='submit'
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-32 px-4 py-1'
          >
            Registrar
          </button>
        </form>
      </section>
    </div>
  );
}
