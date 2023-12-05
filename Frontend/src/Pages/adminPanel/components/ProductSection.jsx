import { Product } from "./Product";
import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react';

export function ProductSection(){

    const [productDb, setProductDb] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/products/')
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
        <TableContainer>
            <Table variant="striped">
                <Thead>
                    <Tr>
                        <Th>Título</Th>
                        <Th>Descripción</Th>
                        <Th>Categorías</Th>
                        <Th>Precio</Th>
                        <Th>Url imagen</Th>
                    </Tr>
                </Thead>
                <Tbody>
                {productDb.map((product, index) => <Product key={index} product={product} />)} 
                </Tbody>
            </Table>
        </TableContainer>
    )
};