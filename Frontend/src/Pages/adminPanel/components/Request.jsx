import React from "react";
import { Tr, Td, HStack } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { RequestModal } from "./RequestModal";

export function Request(props) {
    const { request } = props;

    const handleDelete = async (id) => {
        // Agregar lógica para eliminar solicitud
    };

    return (
        <Tr>
            <Td>{request.title}</Td>
            <Td>{request.description}</Td>
            <Td>{request.price}</Td>
            <Td>{request.imageUrl}</Td>
            <Td>
                <HStack spacing={2}>
                    <>
                        <RequestModal />
                        <DeleteAlert name="Servicio" id={request._id} handleDelete={handleDelete} />
                    </>
                </HStack>
            </Td>
        </Tr>
    );
};
