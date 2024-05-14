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


describe("POST user regsitration", () => {
    it("Should create a user with valid details", async () => {

        const response = await request(app)
            .post('/api/users/register')
            .send({
                userName: 'TestUser13',
                email: 'test13@example.com',
                password: 'test123'
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
        expect(response.body).toHaveProperty('email');
        expect(response.body).toHaveProperty('token');
    });

    it("Should give error when registering already have User Name",async () =>{
        const response = await request(app)
            .post('/api/users/register')
            .send({
                userName: 'TestUser4',
                email: 'test4@example.com',
                password: 'test123'
            });

        expect(response.statusCode).toBe(400);
        // expect(response.body).toEqual({
        //     success: false,
        //     error: 'Admin id not found!'
        //   });
    });
});

describe("POST get all users", () => {
    it("Should get all the users", async () => {
        const response = await request(app).post("/api/users/getAll");

        expect(response.statusCode).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe("POST admin creation", () => {
    it("Should create the admin user", async () => {
        const response = await request(app).post("/api/users/assignAdmin")
            .send({
                name:'Admin8',
                department:'Police',
                email: 'admin8@gmail.com', 
                password: 'admin',
                accessLevel: 3
             });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
        expect(response.body).toHaveProperty('accessLevel');
    })
})

describe("Post login admin user", () => {
    it("Should login the admin", async () => {
        const response = await request(app).post("/api/users/loginAdmin")
            .send({ email: 'admin1@gmail.com', password: 'admin1' });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
    });

    it("Should give error when provided with invalid admin details", async () => {
        const response = await request(app).post("/api/users/loginAdmin")
            .send({ email: 'admin1@gmail.com', password: 'admin' });

        expect(response.statusCode).toBe(400);
        // expect(response.body).toEqual({
        //     success: false,
        //     error: 'User name or password is incorrect'
        //   });
    });
});

describe("Post search user", () => {
    it("Should search the user and return", async () => {
        const response = await request(app).post("/api/users/searchUser")
            .send({ id: '0'});

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
    });

    it("Should give error when provided with invalid user id", async () => {
        const response = await request(app).post("/api/users/searchUser")
            .send({ id: '100'});

        expect(response.statusCode).toBe(400);
        // expect(response.body).toEqual({
        //     success: false,
        //     error: 'User id not found!'
        //   });
    });
});

describe("Post search admin", () => {
    it("Should search the admin and return", async () => {
        const response = await request(app).post("/api/users/searchAdmin")
            .send({ id: '5'});

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('userName');
    });

    it("Should give error when provided with invalid admin id", async () => {
        const response = await request(app).post("/api/users/searchAdmin")
            .send({ id: '0'});

        expect(response.statusCode).toBe(400);
        // expect(response.body).toEqual({
        //     success: false,
        //     error: 'Admin id not found!'
        //   });
    });
});