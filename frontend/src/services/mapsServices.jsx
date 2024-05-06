
import axios from "axios";

export const getProvince = async location => {
    const {data} = await axios.post('api/maps/getProvince', {location});
    return data;
};
