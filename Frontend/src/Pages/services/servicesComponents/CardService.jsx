import IconCheck from "./IconCheck";
import Button from "../../../components/Button";

export default function CardService({
  service,
  extraStyles,
  extraStylesButton,
  ...props
}) {
  const { title, price, description } = service;
  return (
    <div
      className={`flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300 ${extraStyles}`}
      {...props}
    >
      <div>
        <h3 className='text-2xl font-bold text-center'>{title}</h3>
        <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
          <span className='text-4xl font-bold'>${price}</span>/ mes
        </div>
        <ul className='mt-4 space-y-2'>
          {description.map((description) => (
            <li className='flex items-center' key={description}>
              <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
              {description}
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-6'>
        <Button extraStyles={`w-full ${extraStylesButton}`}>Comenzar</Button>
      </div>
    </div>
  );
}
