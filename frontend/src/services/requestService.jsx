import axios from "axios";

export const getRequests = async () => {
    const {data} = await axios.post('api/requests/getAll');
    console.log("Data", data);
    return data;
};

export const getRequestDetails = async (requestID) => {
    const {data} = await axios.get('api/requests/getRequest/' + requestID);
    console.log("Data", data);
    return data;
};

// export const getRequestDetails = async (requestID) => {
//     try {
//       // Assuming you have an API call or some asynchronous operation to fetch data
//       const response = await fetch(`/api/requests/${requestID}`);
//       const data = await response.json();
//       console.log("Data", data);
//       return data; // Make sure data has the necessary properties
//     } catch (error) {
//       console.error('Error fetching request details:', error);
//       throw error;
//     }
// };