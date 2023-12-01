import { useState } from "react";
import InputCheckbox from "../Login/components/InputCheckbox";
import { PSW_REGEX } from "./Register";
import SelectCountry from "./components/SelectCountry";

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const disabledCheck =
    password && repeatPassword && password !== repeatPassword;

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const checkCountry = (value) => {
    setCountry(value);
  };
  const checkEmail = (event) => {
    const value = event.target.value;
    //validar en la base de datos si ya hay un email registrado
    setEmail(value);
  };
  const checkPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!PSW_REGEX.test(password)) {
      setErrorMessage(
        "La contraseña debe tener al menos 8 caracteres, una minúscula, una mayúscula, un número y un caracter especial"
      );
      return;
    }
    try {
      const response = await fetch("http://localhost:3001/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.username,
          lastname: inputs.userlastname,
          country: country,
          email: email,
          password: password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Usuario creado!");
      } else {
        const error = await response.json();
        console.log(error);
        alert("Error. Usuario no registrado");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='border flex flex-col w-fit h-fit justify-evenly px-6 py-4'>
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
          <label htmlFor='usercountry' className=' self-start  space-x-4'>
            <p className='inline w-1/4'>País</p>
            <SelectCountry country={country} onChange={checkCountry} />
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
          {}
          <label htmlFor='repeatUserpassword' className='self-start  space-x-4'>
            <p className='inline'>Repite Password</p>
            <input
              id='repeatUserpassword'
              name='repeatUserpassword'
              type={showPassword ? "text" : "password"}
              value={repeatPassword || ""}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
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
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-32 px-4 py-1 disabled:opacity-75 disabled:cursor-default disabled:hover:bg-blue-500'
            {...(disabledCheck && { disabled: true })}
          >
            Registrar
          </button>
          {errorMessage && (
            <p className='error text-sm text-red-500 text-center w-80'>
              {errorMessage}
            </p>
          )}
          {disabledCheck && (
            <p className='error text-sm text-red-500'>
              Las contraseñas no coinciden
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
