import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, {useState} from 'react';

export function ProductOrderModal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [editedRequest, setEditedRequest] = useState({
        title: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleUpdate = async (id) => {
        fetch(`https://backend-c1520-8eb3ff14ed9d.herokuapp.com/product-orders/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedProduct),
        }).then((response) => {
            if (!response.ok) {
                console.log(response);
                alert("Error al actualizar orden de producto(s)");
            } else {
                alert("Orden de producto(s) actualizado");
            }
        });
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
                <FormLabel>Cliente</FormLabel>
                <Input ref={initialRef} placeholder='Cliente' value={editedRequest.title} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Fecha de compra</FormLabel>
                <Input placeholder='Fecha de compra' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Método de pago</FormLabel>
                <Input placeholder='Método de pago' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Productos</FormLabel>
                <Input placeholder='Productos' />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Precio final</FormLabel>
                <Input placeholder='Precio final' />
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