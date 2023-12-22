import { RequestOrder } from "./RequestOrder";
import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Box } from '@chakra-ui/react';

export function RequestsOrderSection() {
    const [serviceDb, setServiceDb] = useState([]);
    useEffect(() => {
        fetch('https://web-production-2ea0.up.railway.app/service-orders/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setServiceDb(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md">
            <TableContainer>
                <Table variant="simple" colorScheme="yellow">
                    <Thead>
                        <Tr>
                            <Th>Nombre</Th>
                            <Th>Cliente</Th>
                            <Th>Encargado</Th>
                            <Th>Fecha de inicio</Th>
                            <Th>Fecha de entrega</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {serviceDb.map((request, index) => <RequestOrder key={index} request={request} />)}
                    </Tbody>
                </Table>
            </TableContainer>
            </Box>
    );
};
