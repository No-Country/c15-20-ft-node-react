import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore";

export default function Nav() {
  const cart = useCartStore((state) => state.cart);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const role = useAuthStore((state) => state.role);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  const logoutClick = () => {
    logout();
    navigate("/");
  };
  return (
    <header className='z-10 w-full px-4 lg:px-6 h-14 flex items-center rounded-b-lg fixed top-0 bg-zinc-50 bg-blend-luminosity bg-opacity-30 backdrop-blur-sm  shadow-md  text-white'>
      <span className=' font-grotesk-font font-bold text-2xl text-transparent bg-gradient-to-r bg-clip-text from-sunglow-us to-tea-rose'>
        wK
      </span>
      <nav className='w-full '>
        <ul className='flex flex-row items-center justify-end gap-4 sm:gap-6 font-common-font '>
          <li>
            <Link
              to='/'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='18'
                viewBox='0 0 576 512'
                className=' md:hidden fill-white'
              >
                <path d='M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z' />
              </svg>
              <span className=' hidden md:inline'>Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to='/services'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='18'
                viewBox='0 0 576 512'
                className=' md:hidden fill-white'
              >
                <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
              </svg>
              <span className=' hidden md:inline'>Servicios</span>
            </Link>
          </li>
          <li>
            <Link
              to='/store'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='18'
                viewBox='0 0 576 512'
                className=' md:hidden fill-white'
              >
                <path d='M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z' />
              </svg>
              <span className=' hidden md:inline'>Tienda</span>
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='16'
                width='20'
                viewBox='0 0 640 512'
                className=' md:hidden fill-white'
              >
                <path d='M211.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM32 256c0 17.7 14.3 32 32 32h85.6c10.1-39.4 38.6-71.5 75.8-86.6c-9.7-6-21.2-9.4-33.4-9.4H96c-35.3 0-64 28.7-64 64zm461.6 32H576c17.7 0 32-14.3 32-32c0-35.3-28.7-64-64-64H448c-11.7 0-22.7 3.1-32.1 8.6c38.1 14.8 67.4 47.3 77.7 87.4zM391.2 226.4c-6.9-1.6-14.2-2.4-21.6-2.4h-96c-8.5 0-16.7 1.1-24.5 3.1c-30.8 8.1-55.6 31.1-66.1 60.9c-3.5 10-5.5 20.8-5.5 32c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32c0-11.2-1.9-22-5.5-32c-10.8-30.7-36.8-54.2-68.9-61.6zM563.2 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM321.6 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z' />
              </svg>
              <span className=' hidden md:inline'>Nosotros</span>
            </Link>
          </li>
          {role === "admin" ? (
            <li>
              <Link
                to={"/admin"}
                className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='16'
                  width='16'
                  viewBox='0 0 512 512'
                  className=' md:hidden fill-white'
                >
                  <path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm64 64V416H224V160H64zm384 0H288V416H448V160z' />
                </svg>
                <span className=' hidden md:inline'>
                  Panel de administración
                </span>
              </Link>
            </li>
          ) : null}

          {isAuthenticated ? (
            <>
              <li>
                <Link
                  to={"/user"}
                  className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='16'
                    viewBox='0 0 512 512'
                    className=' md:hidden fill-white'
                  >
                    <path d='M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z' />
                  </svg>
                  <span className=' hidden md:inline'>Perfil</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={logoutClick}
                  className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='18'
                    viewBox='0 0 576 512'
                    className=' md:hidden fill-white'
                  >
                    <path d='M320 32c0-9.9-4.5-19.2-12.3-25.2S289.8-1.4 280.2 1l-179.9 45C79 51.3 64 70.5 64 92.5V448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H96 288h32V480 32zM256 256c0 17.7-10.7 32-24 32s-24-14.3-24-32s10.7-32 24-32s24 14.3 24 32zm96-128h96V480c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H512V128c0-35.3-28.7-64-64-64H352v64z' />
                  </svg>
                  <span className=' hidden md:inline'>Salir</span>
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                to={"/login"}
                className='hover:text-transparent hover:bg-teal-us hover:bg-clip-text hover:transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='16'
                  width='16'
                  viewBox='0 0 512 512'
                  className=' md:hidden fill-white'
                >
                  <path d='M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z' />
                </svg>
                <span className=' hidden md:inline'>Ingresar</span>
              </Link>
            </li>
          )}
          <li className='bg-transparent  relative'>
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
