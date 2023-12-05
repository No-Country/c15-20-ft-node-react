import { useState } from "react";
import { Tr, Td } from "@chakra-ui/react";

export function Product(props) {
    const { product } = props;
    const [edit, setEdit] = useState(false);
    const [editedProduct, setEditedProduct] = useState(product);

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(!edit);
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
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
        handleEdit();
    };

    const handleDelete = async (id) => {

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    return (
        <Tr>
            <Td>{edit ? <input type="text" name="title" value={editedProduct.title} onChange={handleChange} /> : product.title}</Td>
            <Td>{edit ? <input type="text" name="description" value={editedProduct.description} onChange={handleChange}/> : product.description}</Td>
            <Td>{edit ? <input type="text" name="tags" value={editedProduct.tags} onChange={handleChange}/> : product.tags.map((tag) => tag)}</Td>
            <Td>{edit ? <input type="number" name="price" value={editedProduct.price}/> : product.price}</Td>
            <Td>{edit ? <input type="text" name="imageUrl" value={editedProduct.imageUrl}/> : product.imageUrl}</Td>
            <Td>
                {edit ? <button onClick={() => {handleUpdate(product._id)}}>✔️</button> : <button onClick={handleEdit}>✍️</button>}
                {edit ? <button onClick={handleEdit}>✖️</button> : <button onClick={() => {handleDelete(product._id)}}>🗑️</button>}
            </Td>
        </Tr>
    );
};