import axios from "axios";

export const getGeoCode = async location =>{
    const {data} = await axios.post("api/maps/getGeoCode",{location});
    return data;
}