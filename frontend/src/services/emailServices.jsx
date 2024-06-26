import axios from "axios";

export const sendRespond = async (ids)=>{
    const {data} = await axios.post("api/email/sendResponds",{ids});
    return data;
}