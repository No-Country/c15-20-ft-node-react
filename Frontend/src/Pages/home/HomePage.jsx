import ContactForm from "../../components/ContactForm";

export default function HomePage() {
  return (
    <div className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
      <section className='w-full flex flex-col items-center justify-center text-white'>
        <h1 className='text-6xl font-title-secondary font-bold my-8'>
          Bi<span className=' italic'>e</span>nvenid
          <span className=' italic'>o</span> a{" "}
          <span className=' font-grotesk-font text-8xl text-transparent bg-gradient-to-r bg-clip-text from-sunglow-us to-tea-rose'>
            WebKong
          </span>
        </h1>
      </section>

      <div className='container px-4 md:px-6 mx-auto'>
        <div className='grid gap-6 items-center'>
          <div className='flex flex-col justify-center space-y-8 text-center'>
            <div className='space-y-2'>
              <h2 className='text-2xl font-title-primary font-bold tracking-tighter sm:text-5xl xl:text-4xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500'>
                Descubre Nuestras Funciones Exclusivas
              </h2>
              <p className='max-w-[600px] font-common-font text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto'>
                Nuestras funciones están diseñadas para mejorar tu productividad
                y optimizar tu flujo de trabajo.
              </p>
            </div>

            <section className='w-full max-w-full space-y-4 mx-auto py-6'>
              <div className='grid grid-cols-3 gap-8'>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconInbox className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    Diseño profesional
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    Creamos sitios web atractivos y funcionales que cumplen con
                    tus objetivos.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconIntegration className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    Responsivo
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    Tu sitio web se verá bien en cualquier dispositivo.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconCustomization className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    SEO optimizado
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    Tu sitio web será fácil de encontrar en los motores de
                    búsqueda.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconSearch className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    Hosting y dominio incluidos
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    No te preocupes por la tecnología, nosotros nos encargamos
                    de todo.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconSecurity className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    Soporte técnico
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    Estamos aquí para ayudarte a que tu sitio web funcione
                    correctamente.
                  </p>
                </div>
                <div className='flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg'>
                  <IconCollaboration className='text-white h-6 w-6 mb-2 border-2 border-gray-500 rounded-full' />
                  <h3 className='text-xl font-grotesk-font font-bold text-white'>
                    Precio asequible
                  </h3>
                  <p className='text-zinc-200 font-common-font dark:text-zinc-100'>
                    Ofrecemos servicios de calidad a precios competitivos.
                  </p>
                </div>
              </div>
            </section>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCollaboration(props) {
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
      <path d='m8 6 4-4 4 4' />
      <path d='M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22' />
      <path d='m20 22-5-5' />
    </svg>
  );
}

function IconCustomization(props) {
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
      <path d='M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' />
      <circle cx='12' cy='12' r='3' />
    </svg>
  );
}

function IconInbox(props) {
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
      <polyline points='22 12 16 12 14 15 10 15 8 12 2 12' />
      <path d='M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z' />
    </svg>
  );
}

function IconIntegration(props) {
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
      <path d='m8 6 4-4 4 4' />
      <path d='M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22' />
      <path d='m20 22-5-5' />
    </svg>
  );
}

function IconSearch(props) {
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function IconSecurity(props) {
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
      <rect width='18' height='11' x='3' y='11' rx='2' ry='2' />
      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
    </svg>
  );
}
