import mongoose from "mongoose";
import request from "supertest";
import dotenv from 'dotenv';
import app from '../app';
import { DisasterReportModel } from "../models/disasterReport.model";
import { testReports } from "../data";
import { generateReportId } from "../routers/report.router";

dotenv.config();

beforeEach(async () => {
    await mongoose.connect(process.env.MONGO_URITEST);
    console.log("Database connected");

    if(await DisasterReportModel.countDocuments() == 0){
        for(let report of testReports) {
            report.reportID = await generateReportId();
            await ShelterModel.create(shelter);
        }
    
        console.log('Shelter seed is done!');
    }
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("POST add report", () => {
    it("Should create a report with valid details", async () => {

        const response = await request(app)
            .post('/api/reports/addReport')
            .send({
                disasterType: "Flood",
                severity: "Medium",
                disasterLocation: "Location",
                affectedCount: 100,
                finished: "false"
            });

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('_id');
    });
});