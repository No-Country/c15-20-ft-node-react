import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import InputCheckbox from "./components/InputCheckbox";
import InputForm from "./components/InputForm";
import Button from "../../components/Button";

export default function Login() {
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://backend-c1520-8eb3ff14ed9d.herokuapp.com/users/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: inputs.useremail,
          password: inputs.userpassword,
        }),
      });
      const data = await response.json();
      login(data.token);
      navigate("/");
    } catch (error) {
      console.error("Error:", error);
      setShowError(true);
    }
  };

  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='shadow-lg rounded-lg text-black dark:bg-zinc-850 border border-gray-300 flex flex-col w-80  min-h-96 max-h-fit pb-6 justify-evenly'>
        <form onSubmit={handleSubmit} className='flex flex-col p-4 space-y-2 '>
          <h1 className=' text-2xl font-bold self-center'>webKong</h1>
          <label htmlFor='useremail'>
            <p>Email</p>
            <InputForm
              type='email'
              id='useremail'
              name='useremail'
              placeholder='ejemplo@mail.com'
              value={inputs.useremail || ""}
              onChange={handleChange}
              extraStyles={`w-full `}
            />
          </label>
          <label htmlFor='userpassword'>
            <p>Password</p>
            <InputForm
              id='userpassword'
              name='userpassword'
              type={showPassword ? "text" : "password"}
              value={inputs.userpassword || ""}
              onChange={handleChange}
              extraStyles={`w-full`}
            />
          </label>
          <InputCheckbox
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            extraStyles=' self-center'
          />
          <Button type='submit' extraStyles={"w-full"}>
            Ingresar
          </Button>
          {/* <button
            type='submit'
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-32 px-4 py-1'
          >
            Login
          </button> */}
          {showError && (
            <p className='text-red-500 text-sm self-center'>
              Usuario o contraseña incorrectos
            </p>
          )}
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
          <Link to='/recover'>¿Has olvidado la contraseña?</Link>
        </p>
      </section>
      <section className='shadow-lg rounded-lg dark:bg-zinc-850 border border-gray-300 flex flex-col w-80 items-center p-4'>
        <p>
          ¿No tienes una cuenta?{" "}
          <span className=' cursor-pointer text-blue-400'>
            <Link to='/signup'>Regístrate</Link>
          </span>
        </p>
      </section>
    </div>
  );
}
