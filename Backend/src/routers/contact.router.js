import { Router } from "express";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { ContactModel } from "../models/contacts.model.js";

const router = Router();

router.post('/addContact',handler(async (req,res) => {

    const {
        contactName,
        number,
        address,
        department
    } = req.body;

        const newID = await generateContactID(department);

        const newContact = {
            id: newID,
            contactName,
            number,
            address,
            department
        };

        try{
            const result = await ContactModel.create(newContact);
            res.send(result);
        }catch(error){
            res.status(BAD_REQUEST).send("Contact create error");
        }
}));

router.post('/getAll',handler(async (req,res) => {

    try{
        const result = await ContactModel.find({});
        res.send(result);
    }catch(error){
        res.status(BAD_REQUEST).send("Contacts fetch error");
    }
}));

const generateContactID = async (department) =>{

    const idString = department.substring(0,3);
    const regexPattern = new RegExp("^" + idString);

    try{
        var countContacts = await ContactModel.countDocuments({id: regexPattern});
        var id = idString + countContacts.toString().padStart(3, '0');

        while(await ContactModel.findOne({id})){
            countContacts++;
            id = idString + countContacts.toString();
        }

        return id;

    }catch(error){
        console.log("Contact id generate failed!");
    }
}

export default router