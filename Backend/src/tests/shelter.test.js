import mongoose from "mongoose";
import request from "supertest";
import dotenv from 'dotenv';
import app from '../app';
import { testShelters } from "../data";
import { ShelterModel } from "../models/shelter.model";
import { UserModel } from "../models/user.model";
import { shelterIDGenerate } from "../routers/shelter.router";

dotenv.config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URITEST);
    console.log("Database connected");

    if(await ShelterModel.countDocuments() == 0){
        for(let shelter of testShelters) {
            shelter.shelterId = await shelterIDGenerate(shelter.location, shelter.shelterType);
            await ShelterModel.create(shelter);
        }
    
        console.log('Shelter seed is done!');
    }
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("POST shelter creation", () => {
    it("Should create a shelter with valid details", async () => {

        const response = await request(app)
            .post('/api/shelters/createShelter')
            .send({
                shelterName: "Shelter1",
                location: "Location1",
                locationLatLang: {
                    latitude: 10,
                    longitude: 10
                  },
                shelterType: "Protection",
                phoneNumber: "0001122333",
                personInCharge: "TestPersonName"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id');
    });
});

describe("POST shelters get all", () => {
    it("Should get all shelters", async () => {

        const response = await request(app)
            .post('/api/shelters/getAll');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe("POST shelters get by id", () => {
    it("Should return list of shelter with valid ids", async () => {

        const sIDs = ["LoP001", "LoP002"];

        const response = await request(app)
            .post('/api/shelters/getShelters')
            .send({
                ids:sIDs
            }
            );

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe("POST shelters delete by id", () => {
    it("Should delete shelter with valid id", async () => {

        const response = await request(app)
            .post('/api/shelters/deleteShelter')
            .send({
                shelterId:"LoP003"
            });

        expect(response.statusCode).toBe(200);
    });

    it("Should give an error when id not found", async () => {

        const response = await request(app)
            .post('/api/shelters/deleteShelter')
            .send({
                shelterId:"Lo000"
            });

        expect(response.statusCode).toBe(400);
    });
});