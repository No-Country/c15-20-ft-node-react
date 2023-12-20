import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export function ServiceStatisticsTable(){
    const [statisticsDb, setStatisticsDb] = useState([]);
    useEffect(() => {
        fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/service-orders/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setStatisticsDb(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    const completedRequests = statisticsDb.filter(request => request.finished).length;
    const pendingRequests = statisticsDb.filter(request => !request.finished).length;
    const totalRequests = statisticsDb.length;

    // console.log(statisticsDb)
    // agregar precio del producto a la orden o el id del tipo para poder generar un precio total
    //Con el id del servicio puedo sacar el tipo del servicio y el precio para poder generar estadísticas de ello

    return (
      <StatGroup>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Servicios completados</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">{completedRequests}</StatNumber>
              <StatHelpText fontSize="sm" display="flex" alignItems="center">
                  <StatArrow type='increase' mr={1} />
                  23.36%
                  {/* relación con el mes pasado o algo así */}
              </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Servicios pendientes</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold" color="#ecbc4c">{pendingRequests}</StatNumber>
              <StatHelpText fontSize="sm" display="flex" alignItems="center">
                  <StatArrow type='increase' mr={1} />
                  23.36%
                  {/* relación con el mes pasado o algo así */}
              </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Total recaudado</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">{`$ 500`}</StatNumber>
              <StatHelpText fontSize="sm" display="flex" alignItems="center">
                  <StatArrow type='increase' mr={1} />
                  23.36%
                  {/* relación con el mes pasado o algo así */}
              </StatHelpText>
          </Stat>
      </div>
  </StatGroup>
    );
};