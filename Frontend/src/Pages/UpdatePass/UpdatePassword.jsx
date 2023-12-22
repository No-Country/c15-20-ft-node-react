import { useState } from "react";
import InputCheckbox from "../Login/components/InputCheckbox";
import { PSW_REGEX } from "../SignUp/Register";
const USUARIO = "admin@admin.com";

export default function UpdatePassword({ email = USUARIO }) {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const disabledCheck =
    password && repeatPassword && password !== repeatPassword;
  const validate = !PSW_REGEX.test(password);
  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://web-production-2ea0.up.railway.app/users/change-password/",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Contraseña actualizada!");
      } else {
        setErrorMessage(
          "La contraseña debe tener al menos 8 caracteres, una minúscula, una mayúscula, un número y un caracter especial"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex flex-col w-100 h-screen justify-center items-center space-y-2'>
      <section className='border flex flex-col max-w-lg w-fit h-96 items-center justify-evenly px-6 py-4'>
        <h1>Bienvenido de regreso</h1>
        <p className='text-center'>
          Ingresa tu nueva contraseña para acceder a tu cuenta: {email}
        </p>
        <form
          onSubmit={handleUpdatePassword}
          className='flex flex-col items-center p-4 space-y-2 '
        >
          <label htmlFor='newPassword'>
            <input
              id='newPassword'
              type={showPassword ? "text" : "password"}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              placeholder='contraseña'
              value={password || ""}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          {validate && (
            <p className='error text-sm text-slate-500 text-center'>
              La contraseña debe tener al menos 8 caracteres, una minúscula, una
              mayúscula, un número y un caracter especial
            </p>
          )}
          <label htmlFor='repeatNewPassword'>
            <input
              id='repeatNewPassword'
              type={showPassword ? "text" : "password"}
              className=' self-end border-b border-blue-500 outline-0 focus:border-pink-500'
              placeholder='confirmar contraseña'
              value={repeatPassword || ""}
              onChange={(event) => setRepeatPassword(event.target.value)}
              required
            />
          </label>
          {disabledCheck && (
            <p className='error text-sm text-red-500'>
              Las contraseñas no coinciden
            </p>
          )}
          <InputCheckbox
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <button
            type='submit'
            className='rounded-lg bg-blue-500 hover:bg-blue-400 transition-all text-white w-fit px-4 py-2 disabled:opacity-75 disabled:cursor-default disabled:hover:bg-blue-500'
            {...(disabledCheck && { disabled: true })}
          >
            Confirmar
          </button>
          {errorMessage && (
            <p className='error text-sm text-red-500 text-center w-80'>
              {errorMessage}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
