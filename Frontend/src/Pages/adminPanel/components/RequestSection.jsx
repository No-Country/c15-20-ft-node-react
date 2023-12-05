import { Request } from "./Request";
import { useState, useEffect } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react';

export function RequestSection() {

    const [requestsDb, setRequestsDb] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/services/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setRequestsDb(data))
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
                            <Th>Precio</Th>
                            <Th>Enlace imagen</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                    {requestsDb.map((request, index) => <Request key={index} request={request} />)}
                    </Tbody>
                </Table>
            </TableContainer>
    )
};