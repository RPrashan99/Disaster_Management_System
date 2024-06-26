import { Router } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { DisasterRequestModel } from "../models/disasterRequest.model.js";

const router = Router();

router.post('/request',handler(async (req,res) => {

    const {
        disasterType,
        requesterName,
        disasterLocation,
        affectedCount,
        medicalNeed,
        otherNeeds,
        disasterLocationLatLan,
        read,
        image} = req.body;

        const currentDateTime = new Date();
        const requestDate = currentDateTime.toDateString();
        const requestTime = currentDateTime.toTimeString();

        const newID = await generateRequestID(disasterType);
        const requestProvince = await getRequestProvince(disasterLocationLatLan);

        const newRequest = {
            requestID: newID,
            disasterType,
            requesterName,
            disasterLocation,
            disasterLocationLatLan,
            affectedCount,
            medicalNeed,
            otherNeeds,
            requestTime,
            requestDate,
            read,
            image,
            requestProvince: requestProvince
        };

        const result = await DisasterRequestModel.create(newRequest);

        res.send(result);
}));

router.post('/getAll', handler(async(req, res) => {

    try{
        const allRequests = await DisasterRequestModel.find({}); //need to change accordingly
        res.send(allRequests);
    } catch (error) {
        console.error(error);
        res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
    }
}));

router.post('/getAllVerify', handler(async(req,res) => {
    try{
        const allRequests = await DisasterRequestModel.find({verify: false}); //need to change accordingly
        res.send(allRequests);
    } catch (error) {
        console.error(error);
        res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
    }
}));

router.get('/getRequest/:requestID', handler(async(req, res) => {
        const { requestID } = req.params;
        console.log("requestID: ", requestID)

    try{
        const request = await DisasterRequestModel.findOne({requestID}); //need to change accordingly
        console.log("Request:",request);
        res.send(request);
    } catch (error) {
        console.error(error);
        res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
    }
}));

router.put('/updateRequest/:requestID', handler(async (req, res) => {
    const { requestID } = req.params;

    try {
        const request = await DisasterRequestModel.findOneAndUpdate(
            { requestID },
            { read: true },
            { new: true } // Return the updated document
        );
        res.status(200).send(request);

    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).send("Internal server error");
    }
}));

//un tested
router.post('/setVerify', handler(async (req, res) =>{
    const {requestIDs} = req.body;

    try{
        const result = await DisasterRequestModel.updateMany(
            { requestID: { $in: requestIDs } }, // Filter condition to match selected IDs
            { $set: { verify: true } }
        );
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Request verify error")
    }
}));

router.post('/showUnverify', handler(async (req, res) =>{
    const {requestIDs} = req.body;

    try{
        const data = await DisasterRequestModel.aggregate([
            { $match: { requestID: { $in: requestIDs }, respondSent: false } }
        ]);

        console.log("Unverify: ", data);

        if(data != null){
            res.send(true);
        }else{
            res.send(false);
        }
    }catch(error){
        res.status(BAD_REQUEST).send("Request unverify check error")
    }
}));

//not finished
const sendingResponds = async(requests) =>{
    try{
        const sendTo = "engerrev897@gmail.com";
        const sendFrom = process.env.Email_USER;
        const replyTo = "engerrev897@gmail.com";
        const subject = "Disaster Management:Request Respond";
        const message = `
            <h3>Disaster Request Respond</h3>
            <p>Request Name: ${requesterName}</P>
            <p>Request Location: ${requesterLocation}</P>
            <p>Request Location Map: ${requestLocationMap}</P>
            <p>Approximate Affected: ${requestAffected}</P>
            <p>Medical Need: ${medicalNeed}</P>
        `;

        await sendEmail(subject, message, sendTo, sendFrom, replyTo);
        res.status(200).send("Email send successful!");

    }catch(error){
        console.log(error);
        res.status(BAD_REQUEST).send("Email send failed!");
    }
}

//need to change accordingly
const generateRequestID = async(disasterType) => {

    const disasterCode = disasterType.substring(0, 2);
    const min = 0;
    const max = 100;
    const requestNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    const newID = disasterCode + requestNumber.toString();
    console.log("ID",newID);

    return newID;

};

const getRequestProvince = async (locationLat) => {
    try{
        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationLat[0]},${locationLat[1]}&key=${process.env.GOOGLEMAP_API}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.results.length > 0) {
            // Loop through the address components to find the province
            for (const component of data.results[0].address_components) {
                if (component.types.includes("administrative_area_level_1")) {
                    return component.long_name;  // Return the province name
                }
            }
        }
    }catch(error){
        console.log("Province get error!");
    }
}

export default router

