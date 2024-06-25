import { Router } from 'express';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { sendEmail } from '../util/sendEmail.js';
import { DisasterRequestModel } from "../models/disasterRequest.model.js";
import { ContactModel } from "../models/contacts.model.js";

const router = Router();

router.post('/sendMail', handler(async (req, res) => {

    const {
        requesterName,
        requesterLocation,
        requestLocationMap,
        requestAffected,
        medicalNeed,
    } = req.body;

    try {
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

    } catch (error) {
        console.log(error);
        res.status(BAD_REQUEST).send("Email send failed!");
    }
}));

router.post('/sendResponds', handler(async (req, res) => {

    const {
        requestIDs
    } = req.body;

    try {
        const locations = await getRequestLocation(requestIDs);

        //console.log("Request Location: ", locations);

        if (locations != null) {
            for (const item in locations) {
                const respondData = await getRespondMails(locations[item]._id);
                //console.log("item: ", locations[item]._id, "Emails: ", respondData);

                const requests = locations[item].requestIDs;

                let messages = `<h2>Disaster Request Details</h2><br>`;

                for (const respond in requests) {

                    const requestDetails = await getRequestDetails(requests[respond]);

                    if (requestDetails != null) {

                        const googleMapLink = `
                        https://www.google.com/maps?q=${requestDetails[0].disasterLocationLatLan[0]},${requestDetails[0].disasterLocationLatLan[1]}
                        `;

                        const message = `
                            <h3>Disaster Request Respond</h3>
                            <p>Request Name: ${requestDetails[0].requesterName}</p>
                            <p>Request Location: ${requestDetails[0].disasterLocation}</p>
                            <p>Request Location Map: ${googleMapLink}</p>
                            <p>Approximate Affected: ${requestDetails[0].affectedCount}</p>
                            <p>Medical Need: ${requestDetails[0].medicalNeed}</p><br>
                        `;

                        messages += message;
                    }
                }

                //console.log(messages);

                const sendTo = respondData[1];
                const sendFrom = process.env.Email_USER;
                const replyTo = respondData[1];
                const subject = "Disaster Management:Request Respond";
                await sendEmail(subject, messages, sendTo, sendFrom, replyTo);

                // for(const email in respondData){

                //     const sendTo = respondData[email];
                //     const sendFrom = process.env.Email_USER;
                //     const replyTo = respondData[email];
                //     const subject = "Disaster Management:Request Respond";
                //     await sendEmail(subject, messages, sendTo, sendFrom, replyTo);
                // }
            }
        }
        res.status(200).send("Email send successful!");

    } catch (error) {
        console.log(error);
        res.status(BAD_REQUEST).send("Email send failed!");
    }
}));

const getRequestLocation = async (ids) => {

    try {
        const data = await DisasterRequestModel.aggregate([
            { $match: { requestID: { $in: ids }, respondSent: false } },
            {
                $group: {
                    _id: "$disasterLocation",
                    requestIDs: { $push: "$requestID" }
                }
            }
        ]);

        return data;
    } catch (error) {
        console.log("Request location get error");
    }
}

const getRespondMails = async (location) => {

    try {
        const data = await ContactModel.distinct('email', { address: location });
        return data;
    } catch (error) {
        console.log("Respond mails get error");
    }
}

const getRequestDetails = async (requestID) => {
    try {
        const data = await DisasterRequestModel.find({ requestID });
        return data;

    } catch (error) {
        console.log("Request get error!");
    }
}

export default router;