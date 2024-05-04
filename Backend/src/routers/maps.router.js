import { Router, response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { Axios } from "axios";

const router = Router();

router.post('/getGeoCode', handler(async(req,res) => {

    const {location} = req.body;
    const apiKey = process.env.GOOGLEMAP_API;

    try{
        const response = await Axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`);
        res.json(response.data);
    } catch(error){
        res.status(BAD_REQUEST).send(error);
    }
}));

export default router;