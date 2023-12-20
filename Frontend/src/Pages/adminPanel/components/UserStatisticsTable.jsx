import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

export function UserStatisticsTable(){

    // console.log(statisticsDb)
    // agregar precio del producto a la orden o el id del tipo para poder generar un precio total
    //Con el id del servicio puedo sacar el tipo del servicio y el precio para poder generar estadísticas de ello

    return (
      <StatGroup>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4'>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Usuarios Registrados</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold">10</StatNumber>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Empleados</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold" color="#ecbc4c">5</StatNumber>
          </Stat>
      </div>
  </StatGroup>
    );
};