import { useState } from "react";
import { Tr, Td } from "@chakra-ui/react";

export function Request(props) {
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
        fetch(`http://localhost:3001/services/${id}`, {
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
            <Td>{edit ? <input type="text" name="title" value={editedRequest.title} onChange={handleChange} /> : request.title}</Td>
            <Td>{edit ? <input type="text" name="description" value={editedRequest.description} onChange={handleChange}/> : request.description}</Td>
            <Td>{edit ? <input type="text" name="price" value={editedRequest.price} onChange={handleChange}/> : request.price}</Td>
            <Td>{edit ? <input type="text" name="imageUrl" value={editedRequest.imageUrl}/> : request.imageUrl}</Td>
            <Td>
                {edit ? <button onClick={() => {handleUpdate(request._id)}}>✔️</button> : <button onClick={handleEdit}>✍️</button>}
                {edit ? <button onClick={handleEdit}>✖️</button> : <button onClick={() => {handleDelete(request._id)}}>🗑️</button>}
            </Td>
        </Tr>
    );
};