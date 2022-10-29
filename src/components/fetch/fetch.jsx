import axios from "axios";

const baseUrl = "https://635ab8efaa7c3f113dadebe7.mockapi.io/contacts/contacts"

export const getContacts = async () => {
    const { data }  = await axios.get(baseUrl);
    return data;
}

export const addContact = async (data) => {
    const {data: result} = await axios.post(baseUrl, data);
    return result;
};

export const removeContact = async (id) => {
    const { data } = await axios.delete(`${baseUrl}/${id}`);
    return data;
};