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
        <Stat>
            <StatLabel>Servicios completados</StatLabel>
            <StatNumber>{completedRequests}</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Servicios pendientes</StatLabel>
            <StatNumber>{pendingRequests}</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat>
            <StatLabel>Total recaudado</StatLabel>
            <StatNumber>{`$ precio`}</StatNumber>
            <StatHelpText>
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
        </StatGroup>
    );
};