import { useState, useEffect } from "react";
import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

export function ProductStatisticsTable(){
    const [price, setPrice] = useState(0);
    const [statisticsDb, setStatisticsDb] = useState([]);
    useEffect(() => {
        fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/product-orders/')
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

    useEffect(() => {
        let newPrice = 0;
        statisticsDb.forEach((productOrder) => {
            newPrice+= productOrder.totalPrice;
        });
        setPrice(newPrice);
    }, [statisticsDb]);

    const totalRequests = statisticsDb.length;
    //necesito una forma de conseguir el producto más vendido revisando en la db de las compras, y ya puedo sacar el precio final

    return(
        <StatGroup>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Plantillas actuales</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">{totalRequests}</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' mr={1} />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Plantillas vendidas</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">{totalRequests}</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Total recaudado</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">{`$ ${price}`}</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          </div>
        </StatGroup>
    )
}