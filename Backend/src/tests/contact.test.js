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

describe("POST add contact", () => {
    it("Should create a contact with valid details", async () => {

        const response = await request(app)
            .post('/api/contacts/addContact')
            .send({
                contactName: "Person1",
                number: "0001122333",
                address: "PersonLocation",
                department: "Sri Lanka Army"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id');
    });
});

describe("POST get all contacts", () => {
    it("Should get all the contacts", async () => {
        const response = await request(app).post("/api/contacts/getAll");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});