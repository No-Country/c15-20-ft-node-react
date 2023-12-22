import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import useServiceStore from "../../../store/serviceStore";

export function NewRequestModal() {
    const addService = useServiceStore(state => state.addService);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [editable, setEditable] = useState({
        title: '',
        description: '',
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditable({ ...editable, [name]: value });
    };

    const handleCreate = async () => {
        fetch(`https://web-production-2ea0.up.railway.app/services/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: editable.title,
                description: editable.description.split(", ") || [editable.description],
                price: editable.price,
            }),
        }).then((response) => {
            if (!response.ok) {
                console.log(response);
                alert("Error al crear servicio");
            } else {
                const newService = async () => await response.json();
                addService({
                    title: editable.title,
                    description: editable.description.split(", ") || [editable.description],
                    price: editable.price,
                });
                console.log(response, newService());
                alert("Servicio creado");
            }
        });    };
  
    return (
      <>
      <Button colorScheme="yellow" onClick={onOpen}>Agregar servicio</Button>  
        <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} colorScheme='yellow'>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Módulo de edición</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <FormControl colorScheme="yellow">
                <FormLabel>Título</FormLabel>
                <Input ref={initialRef} name='title' placeholder='Título' value={editable.title} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Descripción</FormLabel>
                <Input placeholder='Descripción' name='description' value={editable.description} onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
                <FormLabel>Precio</FormLabel>
                <Input placeholder='Precio' name='price' value={editable.price} onChange={handleChange}/>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' mr={3} onClick={() => {
                handleCreate();
                onClose();
              }}>Guardar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };