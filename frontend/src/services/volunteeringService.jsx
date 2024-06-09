import axios from "axios";

export const getVolunteers = async () => {
    const {data} = await axios.post('/api/volunteers/getAll');
    console.log("Data", data);
    return data;
};

export const getVolunteerDetails = async (volunteerID) => {
    const {data} = await axios.get('api/volunteers/getVolunteer/' + volunteerID);
    console.log("Data", data);
    return data;
};

export const updateVolunteerVerification = async (volunteerID, status) => {
    const {data} = await axios.post('api/volunteers/statusChange/' + volunteerID, {status});
    console.log("Data", data);
    return data;
};

