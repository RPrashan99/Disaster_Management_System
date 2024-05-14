import { Router } from "express";
import handler from "express-async-handler";
import { ShelterModel } from "../models/shelter.model.js";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router();

router.post('/createShelter', handler(async (req, res) => {

    const {
        shelterName,
        location,
        locationLatLang,
        shelterType,
        phoneNumber,
        personInCharge
    } = req.body;

    const shelterId = await shelterIDGenerate(location, shelterType);

    const newShelter = {
        shelterId: shelterId,
        shelterName,
        location,
        locationLatLang,
        shelterType,
        phoneNumber,
        personInCharge
    }

    try {
        const result = await ShelterModel.create(newShelter);
        res.send(result);
    } catch (error) {
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

router.post('/getAll', handler(async (req, res) => {

    try {
        const shelters = await ShelterModel.find({});
        res.send(shelters);
    } catch (error) {
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

router.post('/getShelters', handler(async (req, res) => {

    const { ids } = req.body;

    try {
        const shelters = await ShelterModel.find({ shelterID: ids });
        if (shelters.length == 0) {
            res.status(BAD_REQUEST).send("Shelters not found!");
        } else if (shelters.length == ids.length) {
            res.send(shelters);
        } else {
            res.status(BAD_REQUEST).send("Shelters with some ids not found!");
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("Shelter retrieve failed");
    }

}));

router.post('/deleteShelter', handler(async (req, res) => {
    const { shelterId } = req.body;

    try {
        if (await ShelterModel.findOne({ shelterId: shelterId })) {

            const result = await ShelterModel.deleteOne({ shelterId: shelterId });
            res.send(result);
        } else {
            res.status(BAD_REQUEST).send('Shelter delete failed!, shelter id not found');
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("Shelter delete failed!");
    }
}));

export const shelterIDGenerate = async (location, shelterType) => {
    var number = 1;
    const idString = location.substring(0, 2) + shelterType.substring(0, 1);
    var id = idString + number.toString().padStart(3, '0');

    let ids = await ShelterModel.find({ shelterId: id });

    while (ids.length > 0) {
        number++;
        id = idString + number.toString().padStart(3, '0');
        ids = await ShelterModel.find({ shelterId: id });
    }

    return id;
};

export default router;