import ContactForm from "../../components/ContactForm";
import Faq from "../../components/Faq";
import {
  IconCollaboration,
  IconCustomization,
  IconInbox,
  IconIntegration,
  IconSearch,
  IconSecurity,
} from "../../components/Icons";

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
        <div className='grid  items-center'>
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
          </div>
        </div>
        <section className='grid grid-cols-2 gap-4 justify-items-center mt-24'>
          <ContactForm />
          <Faq />
        </section>
      </div>
    </div>
  );
}
