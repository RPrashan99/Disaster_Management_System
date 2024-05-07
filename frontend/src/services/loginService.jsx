import axios from "axios";

export const login = async (userData)=>{
    const {data} = await axios.post("api/users/login",userData);
    return data;
}