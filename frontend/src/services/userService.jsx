import axios from "axios";

export const searchUser = async id => {
    const {data} = await axios.post('api/users/searchUser', {id});
    if(data){
        console.log("Data got","true");
        return data;
    } else {
        console.log("Data got","false");
    }
};

export const searchAdmin = async id => {
    const {data} = await axios.post('api/users/searchAdmin', {id});
    if(data){
        console.log("Data got","true");
        return data;
    } else {
        console.log("Data got","false");
    }
};

export const getAllUsers = async () => {
    const {data} = await axios.post('api/users/getAll');
    return data;
};

export const assignAdmin = async adminData => {
    const {data} = await axios.post('api/users/assignAdmin', adminData);
    return data;
}