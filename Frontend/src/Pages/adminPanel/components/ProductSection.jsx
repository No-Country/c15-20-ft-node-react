import { Product } from "./Product";
import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Button, Box } from '@chakra-ui/react';

export function ProductSection(){

    const [productDb, setProductDb] = useState([]);

    useEffect(() => {
        fetch('https://backend-c1520-8eb3ff14ed9d.herokuapp.com/products/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setProductDb(data))
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    return (
        <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Maneja tus productos</h1>
                <Button colorScheme="yellow">Agregar producto</Button>
            </div>
            <TableContainer>
                <Table variant="simple" colorScheme="yellow">
                    <Thead>
                        <Tr>
                            <Th>Título</Th>
                            <Th>Descripción</Th>
                            <Th>Categorías</Th>
                            <Th>Precio</Th>
                            <Th>Url imagen</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {productDb.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    );
};