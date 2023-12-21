import React, { useState } from "react";
import { Tr, Td, HStack, Text, Button } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { RequestModal } from "./RequestModal";

export function Request(props) {
    const { request } = props;
    const [showFullDescription, setShowFullDescription] = useState(false);

    const handleDelete = async (id) => {
        // Agregar lógica para eliminar solicitud
    };

    // const toggleDescription = () => {
    //     setShowFullDescription(!showFullDescription);
    // };

    // const getDescriptionPreview = () => {
    //     const maxLength = 20;
    //     const descriptionString = request.description.join(', ');
    //     if (descriptionString.length <= maxLength || showFullDescription) {
    //         return descriptionString;
    //     }
    //     return `${descriptionString.substring(0, maxLength)}...`;
    // };

    return (
        <Tr>
            <Td>{request.title}</Td>
            <Td>
            {/* <Text>{getDescriptionPreview()}</Text><br /> */}
            <Text>{request.description}</Text><br />
                {request.description.length > 20 && (
                    <Button size="sm" colorScheme="yellow" onClick={toggleDescription}>
                        {showFullDescription ? "Ver menos" : "Ver más"}
                    </Button>
                )}
                </Td>
            <Td>{`$ ${request.price}`}</Td>
            <Td>
                <HStack spacing={2}>
                    <>
                        <RequestModal request={request} />
                        <DeleteAlert name="Servicio" id={request._id} handleDelete={handleDelete} />
                    </>
                </HStack>
            </Td>
        </Tr>
    );
};
