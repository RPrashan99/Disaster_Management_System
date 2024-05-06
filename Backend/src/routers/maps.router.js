import { Router, response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import axios from 'axios';

const router = Router();

router.post('/getGeoCode', handler(async(req,res) => {

    const {location} = req.body;
    const apiKey = process.env.GOOGLEMAP_API;

    const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`;

    try{
        const response = await axios.get(api);
        res.send(response.data);
    } catch(error){
        console.error('Error:', error);
        res.status(500).json({ error: 'An error occurred while getting geocode.' });
    }
}));

export default router;