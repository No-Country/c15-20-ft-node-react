import { ProductOrder } from "./ProductOrder";
import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Box } from '@chakra-ui/react';

export function ProductOrderSection(){

    const [orderDb, setOrderDb] = useState([]);

    useEffect(() => {
        fetch('https://web-production-2ea0.up.railway.app/product-orders/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setOrderDb(data))
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
                        <Th>Id Cliente</Th>
                        <Th>Fecha de compra</Th>
                        <Th>Método de pago</Th>
                        <Th>Productos</Th>
                        <Th>Precio total (USD)</Th>
                        <Th>Acciones</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {orderDb.map((productOrder, index) => <ProductOrder key={index} productOrder={productOrder} />)} 
                </Tbody>
            </Table>
        </TableContainer>
        </Box>
    )
};