import IconCheck from "./IconCheck";
import Button from "../../../components/Button";

export default function CardService({ service, ...props }) {
  const { title, price, description } = service;
  return (
    <div className='flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300'>
      <div>
        <h3 className='text-2xl font-bold text-center'>{title}</h3>
        <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
          <span className='text-4xl font-bold'>${price}</span>/ mes
        </div>
        <ul className='mt-4 space-y-2'>
          <li className='flex items-center'>
            <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
            {description}
          </li>
          <li className='flex items-center'>
            <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
            Registro de dominio y hosting
          </li>
          <li className='flex items-center'>
            <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
            Soporte técnico básico
          </li>
        </ul>
      </div>
      <div className='mt-6'>
        <Button extraStyles='w-full'>Comenzar</Button>
      </div>
    </div>
  );
}
