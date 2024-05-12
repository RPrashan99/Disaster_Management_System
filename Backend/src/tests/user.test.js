import mongoose from "mongoose";
import request from "supertest";
import dotenv from 'dotenv';
import app from '../app';

dotenv.config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
});

describe("POST get all users" , () =>{
    it("Should get all the users", async () => {
        const response = await request(app).post("/api/users/getAll");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    })
});

describe("Post login admin user", () => {
    it("Should login the user", async () => {
        const response = await request(app).post("/api/users/login")
        .send({ email: 'admin@gmail.com', password: 'admin' });

        expect(response.statusCode).toBe(200);
        
    })
});