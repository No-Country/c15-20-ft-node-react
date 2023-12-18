import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';

export function RequestModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [editedRequest, setEditedRequest] = useState({
        title: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRequest({ ...editedRequest, [name]: value });
    };

    const handleUpdate = async (id) => {
        fetch(`https://backend-c1520-8eb3ff14ed9d.herokuapp.com/services/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedRequest),
        }).then((response) => {
            if (!response.ok) {
                console.log(response);
                alert("Error al actualizar servicio");
            } else {
                alert("Servicio actualizado");
            }
        });
        handleEdit();
    };
  
    return (
      <>
      <Button size="sm" colorScheme="yellow" onClick={onOpen}>✍️</Button>  
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} colorScheme='yellow'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Módulo de edición</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl colorScheme="yellow">
                <FormLabel>Título</FormLabel>
                <Input ref={initialRef} placeholder='Título' value={editedRequest.title} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Descripción</FormLabel>
                <Input placeholder='Descripción' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Precio</FormLabel>
                <Input placeholder='Precio' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>URL de la imagen</FormLabel>
                <Input placeholder='URL de la imagen' />
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' mr={3}>Guardar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };