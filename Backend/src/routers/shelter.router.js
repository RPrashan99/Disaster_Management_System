import { Router } from "express";
import handler from "express-async-handler";
import { ShelterModel } from "../models/shelter.model";
import { BAD_REQUEST } from "../constants/httpStatus";

const router = Router();

//need fix
router.post('/createShelter', handler(async(req, res) => {

    const {
        shelterName,
        location,
        locationLatLang,
        shelterType,
        phoneNumber
    } = req.body;
    
    try{
        const shelters = await ShelterModel.find({});
        res.send(shelters);
    } catch(error){
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

router.post('/getAll', handler(async(req, res) => {
    
    try{
        const shelters = await ShelterModel.find({});
        res.send(shelters);
    } catch(error){
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

router.post('/getShelters', handler(async(req, res) => {

    const {ids} = req.body;

    try{
        const shelters = await ShelterModel.find({shelterID: ids});
        res.send(shelters);
    } catch(error){
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

const shelterIDGenerate = async() =>{

}

export default router;