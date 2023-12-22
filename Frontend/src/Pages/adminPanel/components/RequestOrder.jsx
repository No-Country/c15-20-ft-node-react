import { useState } from "react";
import { Tr, Td, Button, HStack, Input } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { RequestOrderModal } from "./RequestOrderModal";

export function RequestOrder(props) {
    const { request } = props;

    const handleDelete = async (id) => {
        console.log(id);
    };

    const startDate = new Date(request.startDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      const deliveryDate = new Date(request.deliveryDate).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

    return (
<Tr>
            <Td>{request.orderType}</Td>
            <Td>{request.clientId}</Td>
            <Td>{request.guiltId}</Td>
            <Td>{startDate}</Td>
            <Td>{deliveryDate}</Td>
            <Td>
                <HStack spacing={2}>
                    <>
                            <RequestOrderModal />
                            <DeleteAlert name="órden de Servicio" id={request._id} handleDelete={handleDelete} />
                        </>
                </HStack>
            </Td>
        </Tr>
    );
};