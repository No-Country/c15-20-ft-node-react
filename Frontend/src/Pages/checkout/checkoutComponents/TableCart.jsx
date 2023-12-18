import { useDispatch, useSelector } from 'react-redux';
import { TableContainer, Table, Thead, Tr, Th, Td, Tbody, Button, Text } from '@chakra-ui/react';
import { removeProduct } from '../../../store/reducer/cartSlice';

export default function TableCart() {
    const dispatch = useDispatch();
    const cart = useSelector(s => s.cart);
    const handleRemove = () => dispatch(removeProduct(p.id));
    return (
        <TableContainer className="w-full">
            <Table size='sm'>
                <Thead>
                    <Tr>
                        <Th>Producto</Th>
                        <Th>Imágen</Th>
                        <Th isNumeric>Precio</Th>
                        <Th isNumeric>Subtotal</Th>
                        <Th>&nbsp;</Th>
                    </Tr>
                </Thead>
                {cart.length ?
                    cart.map(p => (
                        <Tbody>
                            <Tr>
                                <Td>{p.title}</Td>
                                <Td>
                                    <img src={p.imageUrl} className="w-24 h-[auto]" />
                                </Td>
                                <Td isNumeric>$ {p.price}</Td>
                                <Td isNumeric>$ {p.price}</Td>
                                <Td textAlign="center">
                                    <Button size="sm" onClick={handleRemove}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" data-slot="icon" class="w-4 h-4">
                                            <path strokeLinecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    )) : <Text className="w-full text-center mt-4">No hay elementos para mostrar</Text>}
            </Table>
        </TableContainer>
    )
}