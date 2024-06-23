import { Router } from "express";
import handler from 'express-async-handler';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import { RoadClosureModel } from "../models/roadClosure.model.js";
import { currentDateExtract } from "../common/dateExtract.js";

const router = Router();

router.post('/addRoadClose', handler(async (req,res) => {

    const {
        closeLatLang,
        details
    } = req.body;

    const currentDate = currentDateExtract();
    const id = await generateRoadCloseId();

    const newRoadClose = {
        roadCloseId: id,
        closeLatLang,
        details,
        createdDate: currentDate
    };

    try{
        const result = await RoadClosureModel.create(newRoadClose);
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Road close create error");
    }

}));

router.post('/allRoadCloses', handler(async (req,res) => {

    try{
        const result = await RoadClosureModel.find({});
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Road close fetch error");
    }
}));

router.post('/deleteRoadClose', handler(async(req,res)=>{
    const {id} = req.body;

    try{
        const result = await RoadClosureModel.deleteOne({roadCloseId: id});
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Road close delete error");
    }
}));

const generateRoadCloseId = async() => {
    var count = await RoadClosureModel.countDocuments();

    while(await RoadClosureModel.findOne({roadCloseId: count.toString()})) {
        count++;
    }

    return count;
}

export default router