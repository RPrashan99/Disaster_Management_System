import { Router } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { DisasterReportModel } from "../models/disasterReport.model.js";
import { currentDateExtract } from "../common/dateExtract.js";
import { DisasterRequestModel } from "../models/disasterRequest.model.js";

const router = Router();

router.post('/addReport', handler(async (req,res) => {

    const {disasterType,
        severity,
        disasterLocation, 
        affectedCount,
        finished
    } = req.body;

    const currentDate = currentDateExtract();

    const isFinished = finished == "true" ? true: false;

    const newReport = {
        reportID: await generateReportId(),
        disasterType,
        severity,
        disasterLocation,
        affectedCount,
        createdDate: currentDate,
        updatedDate: currentDate,
        finished: isFinished
    };

    try{
        const result = await DisasterReportModel.create(newReport);
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Report create error");
    }

}));

router.put('/editReport', handler(async (req,res) => {

    const {reportID,
        disasterType,
        severity,
        disasterLocation, 
        affectedCount,
        affectedLocations,
        disasterRequests,
        confirmed,
        respondSent,
        alertSent,
        shelterLocations,
        evacuationRoutes,
        finished} = req.body;

    const currentDate = currentDateExtract();

    const updated = {
        $set:{
            disasterType: disasterType,
            severity: severity,
            disasterLocation: disasterLocation, 
            affectedCount: affectedCount,
            affectedLocations: affectedLocations,
            disasterRequests: disasterRequests,
            updatedDate: currentDate,
            confirmed: confirmed,
            respondSent: respondSent,
            alertSent: alertSent,
            shelterLocations: shelterLocations,
            evacuationRoutes: evacuationRoutes,
            finished: finished
        }
    };

    try{
        const result = await DisasterReportModel.updateOne({reportID}, updated);
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Report update error");
    }}

));

router.post('/allReports', handler(async (req,res) => {

    try{
        const result = await DisasterReportModel.find({});
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Reports fetch error");
    }
}));

router.post('/currentReports', handler(async (req,res) => {

    try{
        const result = await DisasterReportModel.find({finished: false}).sort({updatedDate:-1});
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Reports fetch error");
    }
}));

router.get('/getSeverity', handler(async(req, res) =>{

    try{
        const result = await DisasterReportModel.aggregate([
            {$group: {_id:'$severity', count: {$sum: 1}}},
            {$sort: {count: -1}},
            {$limit: 1}
        ]);

        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Severity get error");
    }
}));

export const generateReportId = async() => {
    var count = await DisasterReportModel.countDocuments();

    while(await DisasterReportModel.findOne({reportID: count.toString()})) {
        count++;
    }

    return count;
}

export default router