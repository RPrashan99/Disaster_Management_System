import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { sendEmail } from '../util/sendEmail.js';

const router = Router();

router.post('/sendMail', handler(async(req, res) => {
    
    const {
        requesterName,
        requesterLocation,
        requestLocationMap,
        requestAffected,
        medicalNeed,
    } = req.body;

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
}));

export default router;