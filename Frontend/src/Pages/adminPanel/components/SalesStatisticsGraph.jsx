import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';

export function SalesStatisticsGraph(){

    return (
        <StatGroup>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Ventas totales</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">1000</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' mr={1} />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Inversión total</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">600</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
            <StatLabel fontSize="lg" fontWeight="semibold">Ganancias</StatLabel>
            <StatNumber fontSize="3xl" fontWeight="bold">400</StatNumber>
            <StatHelpText fontSize="sm" display="flex" alignItems="center">
              <StatArrow type='increase' />
              23.36%
              {/* relación con el mes pasado o algo así */}
            </StatHelpText>
          </Stat>
          </div>
        </StatGroup>
    );
};