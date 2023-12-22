import { useState } from "react";
import { Tr, Td, Button, HStack, Input } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { ProductOrderModal } from "./ProductOrderModal";

export function ProductOrder(props) {
    const { productOrder } = props;

    console.log(productOrder);

    const handleDelete = async (id) => {

    };

const formattedDate = new Date(productOrder.purchaseDate).toLocaleDateString('es-ES', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

    return (
        <Tr>
            <Td>{productOrder.clientId}</Td>
            <Td>{formattedDate}</Td>
            <Td>{productOrder.paymentMethod}</Td>
            <Td>{productOrder.products.map((product, index) => `${index+1}. ${product.title} `)}</Td>
            <Td>{productOrder.totalPrice}</Td>
            <Td>
                <HStack spacing={2}>
                    <>
                        < ProductOrderModal />
                        <DeleteAlert name="Órden de Producto" id={productOrder._id} handleDelete={handleDelete} />
                    </>
                </HStack>
            </Td>
        </Tr>
    );
};
