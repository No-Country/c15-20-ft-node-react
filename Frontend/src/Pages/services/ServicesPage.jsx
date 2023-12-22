import CardService from "./servicesComponents/CardService";
import { useEffect, useState } from "react";
export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const fetchServices = async () => {
    try {
      const response = await fetch(
        "https://web-production-2ea0.up.railway.app/services/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();

        setServices(data);
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
          {services.map((service) =>
            service.title === "Pro" ? (
              <CardService
                key={services.indexOf(service)}
                service={service}
                extraStyles={"border-purple-500"}
                extraStylesButton={
                  "bg-gradient-to-r from-pink-500 to-purple-500"
                }
              />
            ) : (
              <CardService key={services.indexOf(service)} service={service} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
