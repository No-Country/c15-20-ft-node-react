import React from "react";
import { AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, Button, useDisclosure } from '@chakra-ui/react';

export function DeleteAlert(props){
  const { name, id, handleDelete } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

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