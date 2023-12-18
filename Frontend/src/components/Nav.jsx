import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore";

export default function Nav() {
  const cart = useCartStore((state) => state.cart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore(state => state.role);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const logoutClick = () => {
    logout();
    navigate("/");
  };
  return (
    <header className='w-full px-4 lg:px-6 h-14 flex items-center rounded-b-lg bg-white shadow-md  text-black'>
      <span className=' font-grotesk-font font-bold text-2xl text-transparent bg-gradient-to-r bg-clip-text from-sunglow-us to-tea-rose'>
        wK
      </span>
      <nav className='w-full '>
        <ul className='flex flex-row items-center justify-end gap-4 sm:gap-6'>
          <li>
            <Link
              to='/'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              to='/store'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              Tienda
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              Nosotros
            </Link>
          </li>
          <li><Link to={"/admin"} className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'>Panel de administración</Link></li>
          {isAuthenticated ? (
            <>
              <li>
                <Link
                  to={"/user"}
                  className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
                >
                  Perfil
                </Link>
              </li>
              <li>
                <button
                  onClick={logoutClick}
                  className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
                >
                  Salir
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to={"/login"}
                className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
              >
                Ingresar
              </Link>
            </li>
          )}
          {/* <li>
          <Link to={"/admin"}>Ingresar/Usuario/Admin</Link>
        </li> */}
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
    </header>
  );
}
