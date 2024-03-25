import axios from "axios";

export const insertReport = async (report) =>{
    const {data} = await axios.post('api/reports/addReport', report);
    return data;
}

export const editReport = async (report) =>{
    const {data} = await axios.put('api/reports/editReport', report);
    return data;
}

export const getAllReports = async () => {
    const {data} = await axios.post('api/reports/allReports');
    return data;
}

export const getCurrentReports = async () => {
    const {data} = await axios.post('api/reports/currentReports');
    return data;
}

export const getSeverity = async () =>{
    const {data} = await axios.get('api/reports/getSeverity');
    return data;
}