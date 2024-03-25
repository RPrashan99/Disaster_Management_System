import axios from "axios";

export const getNews = async () => {
    const {data} = await axios.post('api/news/getNews');
    console.log("CreatedData", data);
    return data;
};

export const updateNews = async (newsId, newData) => {
    const {data} = await axios.patch('/api/news/updateNews/' + newsId, newData);
    console.log("UpdatedData", data);
    return data;
}

export const deleteNewsItem = async (newsId) =>{
    const response = await axios.delete('/api/news/deleteNews/' + newsId);
    console.log("filtered:", response)
    return response.data;
}