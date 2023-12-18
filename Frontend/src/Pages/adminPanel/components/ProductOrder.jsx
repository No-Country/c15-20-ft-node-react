import { useState } from "react";
import { Tr, Td, Button, HStack, Input } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { ProductOrderModal } from "./ProductOrderModal";

export function ProductOrder(props) {
    const { productOrder } = props;

    const handleDelete = async (id) => {

    };

    return (
        <Tr>
            <Td>{productOrder.clientId}</Td>
            <Td>{productOrder.purchaseDate}</Td>
            <Td>{productOrder.paymentMethod}</Td>
            <Td>{productOrder.products.map((product) => product.name)}</Td>
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
