import { CardHeader, CardBody, CardFooter, Card } from "@chakra-ui/react";
import InputForm from "../Pages/Login/components/InputForm";
import { Textarea } from "@chakra-ui/react";
import Button from "./Button";
import { useState } from "react";
import useContactFormStore from "../store/contactFormStore";

export default function ContactForm() {
  const [errors, setErrors] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { name } = useContactFormStore();
  const { lastName } = useContactFormStore();
  const { email } = useContactFormStore();
  const { message } = useContactFormStore();
  const setName = useContactFormStore((state) => state.setName);
  const { setLastName } = useContactFormStore();
  const { setEmail } = useContactFormStore();
  const { setMessage } = useContactFormStore();

  const handleChang = (e) => {
    e.preventDefault();
    if (!name || !lastName || !email || !message) {
      setErrors(true);
      return;
    } else {
      setErrors(false);
      setIsSubmitting(true);
      setName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setIsSubmitting(false);
      }, 3000);
      // tambien podria llamar una accion de la store para mandar los datos a la api
    }
  };
  return (
    <Card
      maxW='lg'
      className=' text-french-gray'
      variant='elevated'
      boxShadow='xl'
    >
      <CardHeader>
        <h3 className=' text-2xl font-title-primary font-semibold'>Contacto</h3>
        <p className=' font-common-font text-base'>
          Contactate con nosotros completando el siguiente formulario. Podes
          enviarnos cualquier duda o consulta.
        </p>
      </CardHeader>
      <form onSubmit={handleChang}>
        <CardBody className='font-common-font'>
          <div className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='space-y-1'>
                <label htmlFor='first-name'>Nombre</label>
                <InputForm
                  id='first-name'
                  placeholder='Ingrese su nombre'
                  extraStyles='w-full'
                  value={name || ""}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className='space-y-1'>
                <label htmlFor='last-name'>Apellido</label>
                <InputForm
                  id='last-name'
                  placeholder='Ingrese su apellido'
                  extraStyles='w-full'
                  value={lastName || ""}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='space-y-1'>
              <label htmlFor='email'>Email</label>
              <InputForm
                id='email'
                placeholder='Ingrese su email'
                type='email'
                extraStyles='w-full'
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='space-y-1'>
              <label htmlFor='message'>Mensaje</label>
              <Textarea
                className='min-h-[100px]'
                id='message'
                placeholder='Ingrese su mensaje'
                value={message || ""}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className='flex justify-end space-x-2'>
          {errors && (
            <p className=' text-red-500 text-sm self-start'>
              Por favor complete los campos requeridos.
            </p>
          )}
          {isSubmitting && (
            <p className=' text-green-500 text-sm self-start transition-all'>
              Gracias por contactarnos. Nos comunicaremos a la brevedad.
            </p>
          )}
          <Button type='submit'>Enviar</Button>
        </CardFooter>
      </form>
    </Card>
  );
}
