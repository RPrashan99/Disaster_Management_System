import axios from "axios";

export const getAllShelters = async () =>{
    const {data} = await axios.post('api/shelters/getAll');
    return data;
}

export const createShelter = async (shelter) =>{
    const {data} = await axios.post('api/shelters/createShelter', shelter);
    return data;
}

export const deleteShelter = async shelterId =>{
    const {data} = await axios.post('api/shelters/deleteShelter', {shelterId});
    return data;
}