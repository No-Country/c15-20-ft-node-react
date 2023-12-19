import IconCheck from "./servicesComponents/IconCheck";
import Button from "../../components/Button";
import { useEffect } from "react";
export default function ServicesPage() {
  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://backend-c1520-8eb3ff14ed9d.herokuapp.com/services/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <section className='min-h-screen w-full py-12 text-black bg-tea-rose dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center'>
      <div className='container px-4 md:px-6'>
        <div className='grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8'>
          <div className='flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300'>
            <div>
              <h3 className='text-2xl font-bold text-center'>Básico</h3>
              <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
                <span className='text-4xl font-bold'>$29</span>/ mes
              </div>
              <ul className='mt-4 space-y-2'>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Diseño web responsive
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
          <div className=' flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-purple-500'>
            <div>
              <h3 className='text-2xl font-bold text-center'>Pro</h3>
              <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
                <span className='text-4xl font-bold'>$59</span>/ mes
              </div>
              <ul className='mt-4 space-y-2'>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-2xs bg-green-500 rounded-full mr-2 p-1' />
                  Todo lo incluido en el plan básico
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Integración con redes sociales
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Marketing digital básico
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  10 páginas web
                </li>
              </ul>
            </div>
            <div className='mt-6'>
              <Button extraStyles='w-full bg-gradient-to-r from-pink-500 to-purple-500'>
                Comenzar
              </Button>
            </div>
          </div>
          <div className='flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border border-gray-300'>
            <div>
              <h3 className='text-2xl font-bold text-center'>Premium</h3>
              <div className='mt-4 text-center text-zinc-600 dark:text-zinc-400'>
                <span className='text-4xl font-bold'>$99</span>/ mes
              </div>
              <ul className='mt-4 space-y-2'>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Todo lo incluido en los planes básico y estándar
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  20 páginas web
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Diseño personalizado
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Soporte técnico avanzado
                </li>
                <li className='flex items-center'>
                  <IconCheck className='text-white text-xs bg-green-500 rounded-full mr-2 p-1' />
                  Almacenamiento Ilimitado
                </li>
              </ul>
            </div>
            <div className='mt-6'>
              <Button extraStyles='w-full'>Comenzar</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
