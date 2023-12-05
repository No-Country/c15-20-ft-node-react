import { useState } from "react";
import { Tr, Td } from "@chakra-ui/react";

export function RequestOrder(props) {
    const { request } = props;
    const [edit, setEdit] = useState(false);
    const [editedRequest, setEditedRequest] = useState(request);

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setEdit(!edit);
        setEditedRequest(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = async (id) => {
        fetch(`http://localhost:3001/service-orders/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editedRequest),
        }).then((response) => {
            if (!response.ok) {
                console.log(response);
                alert("Error al actualizar servicio");
            } else {
                alert("Servicio actualizado");
            }
        });
        handleEdit();
    };

    const handleDelete = async (id) => {

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedRequest({ ...editedRequest, [name]: value });
    };

    return (
        <Tr>
            <Td>{edit ? <input type="text" name="name" value={editedRequest.name} onChange={handleChange} /> : request.name}</Td>
            <Td>{edit ? <input type="text" name="clientId" value={editedRequest.clientId} onChange={handleChange}/> : request.clientId}</Td>
            <Td>{edit ? <input type="text" name="guiltId" value={editedRequest.guiltId} onChange={handleChange}/> : request.guiltId}</Td>
            <Td>{edit ? <input type="datetime-local" name="startDate" value={editedRequest.startDate}/> : request.startDate}</Td>
            <Td>{edit ? <input type="datetime-local" name="deliveryDate" value={editedRequest.deliveryDate}/> : request.deliveryDate}</Td>
            <Td>
                {edit ? <button onClick={() => {handleUpdate(request._id)}}>✔️</button> : <button onClick={handleEdit}>✍️</button>}
                {edit ? <button onClick={handleEdit}>✖️</button> : <button onClick={() => {handleDelete(request._id)}}>🗑️</button>}
            </Td>
        </Tr>
    );
};