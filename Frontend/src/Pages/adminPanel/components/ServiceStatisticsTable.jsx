import { Stat, StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup } from '@chakra-ui/react';
import { useEffect } from 'react';
import useServiceOrderStore from '../../../store/serviceOrderStore';

export function ServiceStatisticsTable(){
    const {fetchServiceOrders, serviceOrders} = useServiceOrderStore((state) => state);
    // useEffect(() => {
    //     fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/service-orders/')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => setStatisticsDb(data))
    //         .catch(error => {
    //             console.error('There has been a problem with your fetch operation:', error);
    //         });
    // }, []);

    useEffect(() => {
        fetchServiceOrders();
    }, [fetchServiceOrders, serviceOrders]);

    const completedRequests = serviceOrders.filter(request => request.finished).length;
    const pendingRequests = serviceOrders.filter(request => !request.finished).length;
    const totalPrice = serviceOrders.reduce((total, order) => total + order.price, 0);
    const totalRequests = serviceOrders.length;

    return (
      <StatGroup>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Servicios completados</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold" color="#ecbc4c">{completedRequests}</StatNumber>
              <StatHelpText fontSize="sm" display="flex" alignItems="center"><StatArrow type={completedRequests > pendingRequests ? "increase" : "decrease"} mr={1} />{`${completedRequests*100/totalRequests}%`}</StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Servicios pendientes</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold" color="#ecbc4c">{pendingRequests}</StatNumber>
              <StatHelpText fontSize="sm" display="flex" alignItems="center"><StatArrow type={completedRequests > pendingRequests ? "decrease" : "increase"} mr={1} />{`${pendingRequests*100/totalRequests}%`}</StatHelpText>
          </Stat>
          <Stat p={4} boxShadow="md" borderRadius="lg" bg="gray.700">
              <StatLabel fontSize="lg" fontWeight="semibold">Total recaudado</StatLabel>
              <StatNumber fontSize="3xl" fontWeight="bold" color="#ecbc4c">{`$ ${totalPrice}`}</StatNumber>
          </Stat>
      </div>
  </StatGroup>
    );
};