import { useState } from "react";
import { Tr, Td, Button, HStack, Input } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { RequestOrderModal } from "./RequestOrderModal";

export function RequestOrder(props) {
    const { request } = props;

    const handleDelete = async (id) => {
        console.log(id);
    };

    return (
<Tr>
            <Td>{request.name}</Td>
            <Td>{request.clientId}</Td>
            <Td>{request.guiltId}</Td>
            <Td>{request.startDate}</Td>
            <Td>{request.deliveryDate}</Td>
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