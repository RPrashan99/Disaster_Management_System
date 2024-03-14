import { Router } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { NewsModel } from "../models/news.model.js";
import { currentDateExtract } from "../common/dateExtract.js";

const router = Router();

router.post('/createNews', handler(async (req, res) => {

    const {heading, auther, image, newsBody} = req.body;

    const currentTime = new Date().toLocaleTimeString;
    const currentDate = currentDateExtract();

    const newNews = {
        newsId: await generateNewsId(),
        heading,
        auther,
        creartedDate: currentDate,
        createdTime: currentTime,
        image,
        newsBody,
    };

    try{
        const result = await NewsModel.create(newNews);
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("News create failed");
    }

}));

const generateNewsId = async() => {
    var count = await NewsModel.countDocuments();

    while(await NewsModel.findOne({reportID: count.toString()})) {
        count++;
    }

    return count;
};