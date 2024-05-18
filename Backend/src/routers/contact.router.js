import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { ContactModel } from "../models/contacts.model.js";
import path from 'path';

const router = Router();

router.post('/addContact', handler(async (req, res) => {

    const {department, address,hotline, contactName, title, directDial, mobile, email} = req.body;
        // Validate required fields
    if ( !department || !address || !hotline || !contactName || !title || !directDial || !email ) {
        return res.status(BAD_REQUEST).send("Missing required fields");
    }
    const newID = await generateContactID(department); 
    
    const newContact = {
        id: newID,
        address,
        department,
        contactName,
        title,
        hotline,
        directDial,
        mobile,
        email
    };

    try{
        const result = await ContactModel.create(newContact);
        res.send(result);
    } catch(error){
        console.error("Error creating Authority:", error);
        res.status(BAD_REQUEST).send("contact create error");
    }

}));

router.patch('/updateContact/:contactID', handler(async (req, res) => {
    const { contactID } = req.params;
    const {department, address,hotline, contactName, title, directDial, mobile, email} = req.body;
        // Validate required fields
        if (!department || !address || !hotline || !contactName || !title || !directDial || !email) {
            return res.status(BAD_REQUEST).send("Missing required fields");
          }    
    try{
        let updateData = { department, address,hotline, contactName, title, directDial, mobile, email };

        const updatedContacts = await ContactModel.findOneAndUpdate(
            { contactID: contactID },
            updateData,
            { new: true }
        );

        res.send(updatedContacts);
    } catch(error){
        console.error("Error updating contacts:", error);
        res.status(BAD_REQUEST).send("Contacts update failed");
    }

}));

router.post('/getAll', handler( async(req,res) => {
    try{
        const result = await ContactModel.find({});
        res.send(result);
    } catch(error){
        res.status(BAD_REQUEST).send("Contacts fetch error");
    }
}));

router.delete('/deleteContact/:contactID',handler(async(req,res) => {
    const { contactID } = req.params;
    try{
        const deleteContactItem = await ContactModel.findOneAndDelete({contactID});
        res.send(deleteContactItem);

    } catch(error){
        res.status(BAD_REQUEST).send("Contact fetch error");
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

// const generateContactId = async() => {
//     var count = await ContactInfoModel.countDocuments();

//     while(await ContactInfoModel.findOne({contactID: count.toString()})) {
//         count++;
//     }
  
//     return count.toString();
// };

export default router;
