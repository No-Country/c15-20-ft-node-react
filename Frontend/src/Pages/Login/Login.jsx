import { useState } from "react";
import InputCheckbox from "./components/InputCheckbox";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/users/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: inputs.useremail,
        password: inputs.userpassword,
      }),
    }).then((response) => {
      if (!response) {
        console.log(response);
        alert("Error al registrar usuario");
      } else {
        alert("Usuario registrado");
      }
    });
  };
  // const response = await fetch('http://localhost:3000/login', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(inputs),
  // });
  // if (response.ok) {
  //   const { token } = await response.json();
  //   localStorage.setItem('authToken', token);
  // } else {
  //   alert('Error: Las credenciales de usuario no son correctas');
  // }
  // alert(inputs.useremail + " " + inputs.userpassword);
  // if (
  //   inputs.useremail === PREDEFINEDUSER.useremail &&
  //   inputs.userpassword === PREDEFINEDUSER.userpassword
  // ) {
  //   alert("Inicio de sesión exitoso");
  // } else {
  //   alert("Error: Las credenciales de usuario no son correctas");
  // }

  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='border flex flex-col w-80 h-96 justify-evenly'>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-center p-4 space-y-2 '
        >
          <h1 className='text-lg font-bold'>webKong</h1>
          <label htmlFor='useremail' className=' self-start  space-x-4'>
            <p className='inline w-1/4'>Email</p>
            <input
              type='email'
              id='useremail'
              name='useremail'
              value={inputs.useremail || ""}
              onChange={handleChange}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
            />
          </label>
          <label htmlFor='userpassword' className='self-start  space-x-4'>
            <p className='inline'>Password</p>
            <input
              id='userpassword'
              name='userpassword'
              type={showPassword ? "text" : "password"}
              value={inputs.userpassword || ""}
              onChange={handleChange}
              className='border-b border-blue-500 outline-0 focus:border-pink-500'
            />
          </label>
          {/* <label htmlFor='check' className=' pb-4'>
            Show Password{" "}
            <input
              id='check'
              type='checkbox'
              value={showPassword}
              onChange={() => setShowPassword((prev) => !prev)}
            />
          </label> */}
          <InputCheckbox
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <button
            type='submit'
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-32 px-4 py-1'
          >
            Login
          </button>
        </form>
        <div className='flex flex-row justify-around w-4/5 h-fit mx-auto space-x-1'>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
          <span className='grow-0 shrink-0'>o</span>
          <span className=' h-px bg-slate-500 top-3 block grow shrink align-middle relative'></span>
        </div>
        <div className='flex flex-row justify-around w-4/5 mx-auto'>
          <button className='border rounded bg-pink-300 px-4 py-1'>
            Google
          </button>
          <button className='border rounded bg-pink-300  px-4 py-1'>
            Facebook
          </button>
        </div>
        <p className=' cursor-pointer text-blue-400 self-center'>
          ¿Has olvidado la contraseña?
        </p>
      </section>
      <section className='border flex flex-col w-80 items-center p-4'>
        <p>
          ¿No tienes una cuenta?{" "}
          <span className=' cursor-pointer text-blue-400'>Regístrate</span>
        </p>
      </section>
    </div>
  );
}