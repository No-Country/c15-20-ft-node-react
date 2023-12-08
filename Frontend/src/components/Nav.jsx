import { Link } from "react-router-dom";

const cart = ["App Nativa Átomo"];

export default function Nav() {
  // const adminPanel = "/admin";
  // const userProfile = "/user";
  // const login = "/login";

  return (
    <nav className='w-full'>
      <ul className='flex flex-row justify-end space-x-4'>
        <li>
          <Link to='/'>Inicio</Link>
        </li>
        <li>
          <Link to='/services'>Servicios</Link>
        </li>
        <li>
          <Link to='/store'>Tienda</Link>
        </li>
        <li>
          <Link to='/about'>Nosotros</Link>
        </li>
        <li>
          <Link to={"/admin"}>Ingresar/Usuario/Admin</Link>
        </li>
        <li className='bg-transparent px-4 py-2 relative'>
          <Link to='/checkout'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
              />
            </svg>
            {cart.length ? (
              <span className='absolute right-0 top-0 rounded-full bg-green-600 w-5 h-5 flex items-center justify-center font-bold text-xs text-white'>
                {cart.length > 9 ? "+9" : cart.length}
              </span>
            ) : null}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
