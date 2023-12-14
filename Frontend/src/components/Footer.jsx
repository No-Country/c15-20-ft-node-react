import Button from "./Button";

export default function Footer() {
  return (
    <footer className='  text-white px-6 md:px-12 py-4 md:py-6'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h3 className='text-2xl font-bold mb-4'>Contacto</h3>
          <p className='mb-2'>
            <LocateIcon className='w-4 h-4 inline mr-2' />
            123 Main St, Anywhere, ARG
          </p>
          <p className='mb-2'>
            <PhoneIcon className='w-4 h-4 inline mr-2' />
            (123) 456-7890
          </p>
          <p>
            <MailIcon className='w-4 h-4 inline mr-2' />
            info@webkong.com
          </p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='text-2xl font-bold mb-4'>Redes Sociales</h3>
          <Button
            className='text-white mb-2 flex items-center justify-center'
            variant='link'
          >
            <TwitterIcon className='w-4 h-4 inline mr-2' />
            Twitter
          </Button>
          <Button
            className='text-white mb-2 flex items-center justify-center'
            variant='link'
          >
            <FacebookIcon className='w-4 h-4 inline mr-2' />
            Facebook
          </Button>
          <Button
            className='text-white mb-2 flex items-center justify-center'
            variant='link'
          >
            <InstagramIcon className='w-4 h-4 inline mr-2' />
            Instagram
          </Button>
        </div>
        <div>
          <h3 className='text-2xl font-bold mb-4'>Nosotros</h3>
          <p>
            Ofrecemos una amplia gama de servicios de diseño web, incluyendo
            diseño de sitios web personalizados, desarrollo de sitios web,
            optimización para motores de búsqueda y marketing en redes sociales.
          </p>
        </div>
      </div>
      <div className='mt-6 text-center text-gray-500'>
        <p>© WebKong. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
      <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
      <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='2' x2='5' y1='12' y2='12' />
      <line x1='19' x2='22' y1='12' y2='12' />
      <line x1='12' x2='12' y1='2' y2='5' />
      <line x1='12' x2='12' y1='19' y2='22' />
      <circle cx='12' cy='12' r='7' />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='16' x='2' y='4' rx='2' />
      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z' />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
    </svg>
  );
}
