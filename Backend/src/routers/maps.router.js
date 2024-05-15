import { Router, response } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
//import { axios } from "axios";

const router = Router();

router.post('/getGeoCode', handler(async(req,res) => {

    const {location} = req.body;
    const apiKey = process.env.GOOGLEMAP_API;

    try{
        //const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`);
        res.json(response.data);
    } catch(error){
        res.status(BAD_REQUEST).send(error);
    }
}));

router.post ('/getProvince',handler( async(req,res) => {
    const {location} = req.body;
    const apiKey = 'AIzaSyCqnhZFna6jPPizSKO88sNgdYLc3SHAGhk';
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)},Sri%20Lanka&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const provinceComponent = addressComponents.find(component => component.types.includes('administrative_area_level_1'));
        if (provinceComponent) {
            res.send(provinceComponent.long_name);
        } else {
            res.send("Unknown");
        }
      }
    } catch (error) {
      console.error('Error fetching province:', error);
    }
  
}));    

export default router;