import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex container mx-auto'>
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
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestra misión
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nisi purus, aliquam eu laoreet et, porttitor ac
                        tortor.
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
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestros valores
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nisi purus, aliquam eu laoreet et, porttitor ac
                        tortor.
                      </p>
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
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestro equipo
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nisi purus, aliquam eu laoreet et, porttitor ac
                        tortor.
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
                      <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
                        Nuestros clientes
                      </h1>
                      <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nisi purus, aliquam eu laoreet et, porttitor ac
                        tortor.
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
