import { useState } from "react";
import { PSW_REGEX } from "./Register";
import { useNavigate } from "react-router-dom";
import InputCheckbox from "../Login/components/InputCheckbox";
import SelectCountry from "./components/SelectCountry";
import Button from "../../components/Button";
import InputForm from "../Login/components/InputForm";

export default function SignUp() {
  const [inputs, setInputs] = useState({});
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [succes, setSucces] = useState(false);
  const navigate = useNavigate();
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
      const response = await fetch(
        "https://backend-c1520-8eb3ff14ed9d.herokuapp.com/users/register/",
        {
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
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSucces(true);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
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
    <div className='flex w-100 min-h-screen justify-center py-24 bg-teal-us font-common-font'>
      <section className='shadow-lg rounded-lg bg-slate-50 text-black  border border-gray-300 flex flex-col w-fit h-fit justify-evenly px-6 py-4'>
        <h1 className=' self-center text-lg font-bold font-grotesk-font pb-4'>
          Crea tu cuenta
        </h1>
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
        <form onSubmit={handleSubmit} className='flex flex-col p-4 space-y-2 '>
          <label htmlFor='username'>
            <p>Nombre</p>
            <InputForm
              type='text'
              id='username'
              name='username'
              value={inputs.username || ""}
              onChange={handleChange}
              extraStyles='w-full'
            />
          </label>
          <label htmlFor='userlastname'>
            <p>Apellido</p>
            <InputForm
              type='text'
              id='userlastname'
              name='userlastname'
              value={inputs.userlastname || ""}
              onChange={handleChange}
              extraStyles='w-full'
            />
          </label>
          <label htmlFor='usercountry'>
            <p>País</p>
            <SelectCountry country={country} onChange={checkCountry} />
          </label>
          <label htmlFor='useremail'>
            <p>Email</p>
            <InputForm
              type='email'
              id='useremail'
              name='useremail'
              value={email || ""}
              onChange={checkEmail}
              placeholder='ejemplo@mail.com'
              extraStyles='w-full '
            />
          </label>
          <label htmlFor='userpassword'>
            <p>Password</p>
            <InputForm
              id='userpassword'
              name='userpassword'
              type={showPassword ? "text" : "password"}
              value={password || ""}
              onChange={checkPassword}
              extraStyles='w-full '
            />
          </label>
          {}
          <label htmlFor='repeatUserpassword'>
            <p>Repite Password</p>
            <InputForm
              id='repeatUserpassword'
              name='repeatUserpassword'
              type={showPassword ? "text" : "password"}
              value={repeatPassword || ""}
              onChange={(e) => {
                setRepeatPassword(e.target.value);
              }}
              extraStyles='w-full'
            />
          </label>
          <InputCheckbox
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            extraStyles=' self-center'
          />
          <Button
            extraStyles={"w-full"}
            type='submit'
            {...(disabledCheck && { disabled: true })}
          >
            Registrarme
          </Button>
          {errorMessage && (
            <p className='error text-sm text-red-500 self-center text-center w-80'>
              {errorMessage}
            </p>
          )}
          {disabledCheck && (
            <p className='error text-sm text-red-500 self-center'>
              Las contraseñas no coinciden
            </p>
          )}
          {succes && (
            <p className='text-green-500 text-sm self-start transition-all'>
              Usuario creado
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
