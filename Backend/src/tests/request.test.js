import mongoose from "mongoose";
import request from "supertest";
import dotenv from 'dotenv';
import app from '../app';

dotenv.config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URITEST);
    console.log("Database connected");
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET request creation", () => {
    it("Should create a request with valid details", async () => {

        const response = await request(app)
            .get('/api/requests/request')
            .send({
                disasterType: "Earthquake",
                disasterLocation: "Nuwara Eliya",
                affectedCount: 50,
                medicalNeed: true,
                read:false
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id');
    });
});

describe("POST request get all", () => {
    it("Should get all requests", async () => {

        const response = await request(app)
            .post('/api/requests/getAll');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe("POST request get all verify", () => {
    it("Should get all verified requests", async () => {

        const response = await request(app)
            .post('/api/requests/getAllVerify');

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});