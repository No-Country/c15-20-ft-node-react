import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Button, Box } from '@chakra-ui/react';
import { Request } from "./Request";
import useServiceStore from "../../../store/serviceStore";
import { NewRequestModal } from "./NewRequestModal";

export function RequestSection() {
  const { fetchServices, services } = useServiceStore(state => state);

  useEffect(() => {
    fetchServices();
  }, [fetchServices, services]);

  // useEffect(() => {
  //   fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/services/')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => setRequestsDb(data))
  //     .catch(error => {
  //       console.error('There has been a problem with your fetch operation:', error);
  //     });
  // }, []);

  return (
    <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Maneja tus servicios</h1>
        < NewRequestModal />
      </div>
      <TableContainer>
        <Table variant="simple" colorScheme="yellow">
          <Thead>
            <Tr>
              <Th>Título</Th>
              <Th>Descripción</Th>
              <Th>Precio (USD)</Th>
              <Th>Acciones</Th>
            </Tr>
          </Thead>
          <Tbody>
            {services.map((request, index) => (
              <Request key={index} request={request} />
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
