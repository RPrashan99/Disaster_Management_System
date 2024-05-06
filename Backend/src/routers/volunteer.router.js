import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { VolunteerModel } from '../models/volunteer.model.js';
import { currentDateExtract } from '../common/dateExtract.js';

const router = Router();

router.post('/create', handler(async(req, res) =>{

    const {
        fullName,
        email,
        nicNumber,
        phoneNumber,
        age,
        address,
        skills,
        experience,
        motivation,
    } = req.body;

    const today = currentDateExtract();
    const id = await idGenerator();

    const volunteer = {
        id: id,
        fullName,
        email,
        nicNumber,
        phoneNumber,
        age,
        address,
        skills,
        experience,
        motivation,
        createdDate: today
    }

    try{
        const result = await VolunteerModel.create(volunteer);
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Volunteer create error");
    }

}));

router.post('/getAllBytype', handler(async(req, res) =>{
    const {status} = req.body;

    try{
        const result = await VolunteerModel.find({status}).sort({createdDate:-1});
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Get volunteer error");
    }
}));

router.post('/statusChange', handler(async(req, res) =>{
    const {id, status} = req.body;

    try{
        const result = await VolunteerModel.updateOne({id},{status: status});
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Volunteer status update error");
    }
}));


const idGenerator = async() =>{

    try{
        const countDocs = await VolunteerModel.countDocuments();
        const id = "Vo" + countDocs.toString().padStart(3, '0');
        return id;
    } catch(error){
        console.log("ID generate error: ");
    }
}

export default router;
