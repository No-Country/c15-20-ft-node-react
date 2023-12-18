import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';

export function RequestOrderModal() {
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
        fetch(`https://backend-c1520-8eb3ff14ed9d.herokuapp.com/service-orders/${id}`, {
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
                <FormLabel>Nombre del proyecto</FormLabel>
                <Input ref={initialRef} placeholder='Nombre del proyecto' value={editedRequest.title} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Cliente</FormLabel>
                <Input placeholder='Cliente' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Encargado</FormLabel>
                <Input placeholder='Encargado' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Fecha de inicio</FormLabel>
                <Input placeholder='Fecha de inicio' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Fecha de finalización</FormLabel>
                <Input placeholder='Fecha de finalización' />
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