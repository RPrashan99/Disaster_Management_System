import axios from "axios";

export const addRoadClose = async (detail) => {
    const {data} = await axios.post('api/roadCloses/addRoadClose', detail);
    return data;
};

export const getRoadCloses = async () => {
    const {data} = await axios.post('api/roadCloses/allRoadCloses');
    return data;
};

export const deleteRoadClose = async id => {
    const {data} = await axios.post('api/roadCloses/deleteRoadClose', {id});
    return data;
}