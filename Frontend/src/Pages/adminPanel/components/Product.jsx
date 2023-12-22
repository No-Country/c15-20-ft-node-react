import React, { useState } from "react";
import { Tr, Td, Button, HStack, Input } from "@chakra-ui/react";
import { DeleteAlert } from "./DeleteAlert";
import { ProductModal } from "./ProductModal";

export function Product(props) {
    const { product } = props
    const handleDelete = async (id) => {

    };

    const shortenImageUrl = (url) => {
        return url.length > 15 ? `${url.substring(0, 15)}...` : url;
    };

    return (
        <Tr>
            <Td>{product.title}</Td>
            <Td>{product.description}</Td>
            <Td>{product.tags}</Td>
            <Td>{product.price}</Td>
            <Td>{shortenImageUrl(product.imageUrl)}</Td>
            <Td>
                <HStack spacing={2}>
                    <>
                            <ProductModal />
                            <DeleteAlert name="Producto" id={product._id} handleDelete={handleDelete} />
                        </>
                </HStack>
            </Td>
        </Tr>
    );
};