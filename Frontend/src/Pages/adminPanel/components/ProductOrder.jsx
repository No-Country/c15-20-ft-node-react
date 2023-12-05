import { useState } from "react";
import { Tr, Td } from "@chakra-ui/react";

export function ProductOrder(props) {
    const { productOrder } = props;
    const [edit, setEdit] = useState(false);
    const [editedProduct, setEditedProduct] = useState(productOrder);

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(!edit);
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (id) => {
        fetch(`http://localhost:3001/product-orders/${id}`, {
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
            <Td>{edit ? <input type="text" name="clientId" value={editedProduct.clientId} onChange={handleChange} /> : productOrder.clientId}</Td>
            <Td>{edit ? <input type="datetime-local" name="purchaseDate" value={editedProduct.purchaseDate} onChange={handleChange}/> : productOrder.purchaseDate}</Td>
            <Td>{edit ? <input type="text" name="paymentMethod" value={editedProduct.paymentMethod} onChange={handleChange}/> : productOrder.paymentMethod}</Td>
            <Td>{edit ? <input type="datetime-local" name="product" value={editedProduct.products}/> : productOrder.products.map((product) => product.name)}</Td>
            <Td>{edit ? <input type="text" name="totalPrice" value={editedProduct.totalPrice}/> : productOrder.totalPrice}</Td>
            <Td>
                {edit ? <button onClick={() => {handleUpdate(productOrder._id)}}>✔️</button> : <button onClick={handleEdit}>✍️</button>}
                {edit ? <button onClick={handleEdit}>✖️</button> : <button onClick={() => {handleDelete(productOrder._id)}}>🗑️</button>}
            </Td>
        </Tr>
    );
};
