
import axios from "axios";

export const getContacts = async () => {
    const {data} = await axios.post('api/contacts/getAll');
    console.log("Created contacts in the database", data);
    return data;
}

export const updateContacts = async (contactID, newData)=> {
    const {data} = await axios.patch('/api/contacts/updateContact/'+ contactID, newData);
    console.log("Update contacts", data);
    return data;
}

export const deleteContact = async (contactID) => {
    const {data} = await axios.delete('/api/contacts/deleteContact/' + contactID);
    return data;
}