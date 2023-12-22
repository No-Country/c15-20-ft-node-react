import React from "react";
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';
import useServiceStore from "../../../store/serviceStore";

export function DeleteAlert(props){
  const { name, id } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const removeService = useServiceStore(state => state.removeService);

  console.log(id);
  

  const handleDelete = async (id) => {
    fetch(`https://web-production-2ea0.up.railway.app/services/${id}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json",
      },
  }).then((response) => {
      if (!response.ok) {
          console.log(response);
          alert("Error al eliminar servicio");
      } else {
          removeService(id);
          alert("Servicio eliminado");
      }
  }); 
};

  return(
    <>
    <Button size="sm" colorScheme="yellow" onClick={onOpen}>🗑️</Button>
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>{`Eliminar ${name}`}</AlertDialogHeader>
          <AlertDialogBody>{`¿Está segurx de que desea eliminar el registro? No podrá revertir esta acción.`}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>Cancelar</Button>
            <Button colorScheme='yellow' onClick={() => {
              onClose();
              handleDelete(id);
            }} ml={3}>Eliminar</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
    </>
  );
};