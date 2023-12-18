import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div className=' bg-sunglow-us flex flex-col min-h-screen font-common-font'>
      <main className='flex container mt-24 mx-auto'>
        <Tabs
          isFitted
          variant='enclosed'
          className='w-full py-4 md:py-8 lg:py-16 xl:py-24'
          defaultIndex={0}
        >
          <TabList className='grid w-full grid-cols-4 gap-4'>
            <Tab value='mission'>Nuestra misión</Tab>
            <Tab value='values'>Nuestros valores</Tab>
            <Tab value='team'>Nuestro equipo</Tab>
            <Tab value='clients'>Nuestros clientes</Tab>
          </TabList>

          <TabPanels>
            <TabPanel value='mission'>
              <section className='w-full py-12 md:py-24 lg:py-32'>
                <div className='container px-4 md:px-6'>
                  <div className='flex flex-col items-center space-y-4 text-center'>
                    <div className='space-y-2'>
                      <h1 className='text-3xl font-grotesk-font font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestra misión
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Nuestra misión es ayudar a las empresas a alcanzar sus
                        objetivos a través del diseño web. Nos comprometemos a
                        proporcionar un servicio de alta calidad que sea
                        creativo, innovador y efectivo.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </TabPanel>
            <TabPanel value='values'>
              <section className='w-full py-12 md:py-24 lg:py-32'>
                <div className='container px-4 md:px-6'>
                  <div className='flex flex-col items-center space-y-4 text-center'>
                    <div className='space-y-2'>
                      <h1 className='text-3xl font-grotesk-font font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestros valores
                      </h1>
                      <ul className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        <li>
                          Creatividad: Nos esforzamos por crear sitios web que
                          sean únicos y atractivos.
                        </li>
                        <li>
                          Innovación: Siempre estamos buscando nuevas formas de
                          mejorar el diseño web.
                        </li>
                        <li>
                          Eficacia: Nos comprometemos a crear sitios web que
                          cumplan con los objetivos de nuestros clientes.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </TabPanel>
            <TabPanel value='team'>
              <section className='w-full py-12 md:py-24 lg:py-32'>
                <div className='container px-4 md:px-6'>
                  <div className='flex flex-col items-center space-y-4 text-center'>
                    <div className='space-y-2'>
                      <h1 className='text-3xl font-grotesk-font font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestro equipo
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Nuestro equipo está formado por diseñadores y
                        desarrolladores web experimentados que tienen una pasión
                        por el diseño web. Estamos comprometidos a proporcionar
                        un servicio de alta calidad que sea creativo, innovador
                        y efectivo.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </TabPanel>
            <TabPanel value='clients'>
              <section className='w-full py-12 md:py-24 lg:py-32'>
                <div className='container px-4 md:px-6'>
                  <div className='flex flex-col items-center space-y-4 text-center'>
                    <div className='space-y-2'>
                      <h1 className='text-3xl font-grotesk-font font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestros clientes
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Hemos trabajado con una amplia gama de clientes, desde
                        pequeñas empresas hasta grandes corporaciones. Nos
                        enorgullece ayudar a nuestros clientes a alcanzar sus
                        objetivos de marketing en línea. <br /> Si está buscando
                        una agencia de diseño web que pueda ayudarle a alcanzar
                        sus objetivos, no dude en ponerse en contacto con
                        nosotros.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </main>
    </div>
  );
}
