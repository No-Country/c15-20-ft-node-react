import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import React, {useEffect, useState} from 'react';
import useServiceStore from "../../../store/serviceStore";

export function RequestModal(props) {
    const updateService = useServiceStore(state => state.updateService);
    const {_id, title, description, price} = props.request;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const [editable, setEditable] = useState({
        title: title || '',
        // description: description || '',
        price: price || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditable({ ...editable, [name]: value });
    };

    const handleUpdate = async (_id) => {
        fetch(`https://web-production-2ea0.up.railway.app/services/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: editable.title,
                // description: editable.description.split(", "),
                price: editable.price,
            }),
        }).then((response) => {
            if (!response.ok) {
                console.log(response);
                alert("Error al actualizar servicio");
            } else {
                updateService(_id);
                console.log(response, _id);
                alert("Servicio actualizado");
            }
        });    };
  
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
                <Input ref={initialRef} name='title' placeholder='Título' value={editable.title} onChange={handleChange} />
            </FormControl>

            {/* <FormControl mt={4}>
                <FormLabel>Descripción</FormLabel>
                <Input placeholder='Descripción' name='description' value={editable.description} onChange={handleChange} />
            </FormControl> */}

            <FormControl mt={4}>
                <FormLabel>Precio</FormLabel>
                <Input placeholder='Precio' name='price' value={editable.price} onChange={handleChange}/>
            </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='yellow' mr={3} onClick={() => {
                handleUpdate(_id);
                onClose();
              }}>Guardar</Button>
              <Button onClick={onClose}>Cancelar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };