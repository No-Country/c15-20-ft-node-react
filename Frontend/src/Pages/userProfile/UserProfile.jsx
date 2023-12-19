import { CardHeader, CardBody, CardFooter, Card } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import Button from "../../components/Button";
import { useState } from "react";
import { PSW_REGEX } from "../SignUp/Register";
import useAuthStore from "../../store/authStore";

export default function UserProfile() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const { name, lastName, email, productsPurchased, servicesPurchased } =
    useAuthStore();
  const disabledCheck =
    password && repeatPassword && password !== repeatPassword;
  const validate = !PSW_REGEX.test(password);

  const handleUpdatePassword = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://backend-c1520-8eb3ff14ed9d.herokuapp.com/users/change-password/",
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
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className='p-10 pt-24 bg-teal-us'>
      <div className='container mx-auto'>
        <h1 className='text-3xl font-grotesk-font font-bold mb-10'>Cuenta</h1>
        <Card className='mb-10 font-common-font z-0'>
          <CardHeader>
            <h2 className=' font-grotesk-font font-bold text-2xl'>
              Información Personal
            </h2>
            <p>
              Hola,{" "}
              <span className='font-bold'>{name + " " + lastName ?? null}</span>
              . Acá puedes actualizar tu información personal.
            </p>
          </CardHeader>
          <CardBody className='space-y-4 '>
            <div className='space-y-2'>
              <label htmlFor='name'>Nombre</label>
              <Input id='name' required />
            </div>
            <div className='space-y-2'>
              <label htmlFor='phone'>Apellido</label>
              <Input id='lastname' required />
            </div>
            <div className='space-y-2'>
              <label htmlFor='email'>Email</label>
              <Input id='email' required type='email' />
            </div>
          </CardBody>
          <CardFooter>
            <Button>Actualizar</Button>
          </CardFooter>
        </Card>
        <Card className='mb-10'>
          <CardHeader>
            <h2 className=' font-grotesk-font font-bold text-2xl'>
              Cambiar Contraseña
            </h2>
            <p>Actualiza tu contraseña.</p>
          </CardHeader>
          <CardBody className='space-y-4'>
            <div className='space-y-2'>
              <label htmlFor='currentPassword'>Contraseña actual</label>
              <Input id='currentPassword' required type='password' />
            </div>
            <div className='space-y-2'>
              <label htmlFor='newPassword'>Nueva contraseña</label>
              <Input
                id='newPassword'
                required
                type='password'
                value={password || ""}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className='space-y-2'>
              <label htmlFor='confirmNewPassword'>
                Confirma la nueva contraseña
              </label>
              <Input
                id='confirmNewPassword'
                required
                type='password'
                value={repeatPassword || ""}
                onChange={(event) => setRepeatPassword(event.target.value)}
              />
            </div>
            {validate && (
              <p className='error text-sm text-slate-500 text-center'>
                La contraseña debe tener al menos 8 caracteres, una minúscula,
                una mayúscula, un número y un caracter especial
              </p>
            )}
            {disabledCheck && (
              <p className='error text-sm text-red-500'>
                Las contraseñas no coinciden
              </p>
            )}
          </CardBody>
          <CardFooter>
            <Button
              onClick={handleUpdatePassword}
              {...(disabledCheck && { disabled: true })}
            >
              Actualizar
            </Button>
          </CardFooter>
        </Card>
        <Card className='mb-10'>
          <CardHeader>
            <h2 className=' font-grotesk-font font-bold text-2xl'>
              Mis Productos
            </h2>
            <p>Consulta y gestiona tus compras.</p>
          </CardHeader>
          <CardBody className='space-y-4'>
            {productsPurchased?.length > 0 ? (
              productsPurchased.map((product) => {
                return (
                  <li key={product} className='font-common-font'>
                    {product}
                  </li>
                );
              })
            ) : (
              <p className='text-gray-500'>No hay productos todavía.</p>
            )}
            <hr />
            {servicesPurchased?.length > 0 ? (
              servicesPurchased.map((product) => {
                return (
                  <li key={product} className='font-common-font'>
                    {product}
                  </li>
                );
              })
            ) : (
              <p className='text-gray-500'>No hay servicos todavía.</p>
            )}
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
