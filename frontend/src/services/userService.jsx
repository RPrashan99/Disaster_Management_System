import axios from "axios";

export const searchUser = async id => {
    const {data} = await axios.post('api/users/searchUser', {id});
    console.log("data :", data);
    if(data){
        console.log("Data got","true");
        return data;
    } else {
        console.log("Data got","false");
    }
};

export const searchAdmin = async id => {
    const {data} = await axios.post('api/users/searchAdmin', {id});
    console.log("data :", data);
    if(data){
        console.log("Data got","true");
        return data;
    } else {
        console.log("Data got","false");
    }
};