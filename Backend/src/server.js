import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from 'cors';
import userRouter from './routers/user.router.js';
import disasterRequestRouter from './routers/request.router.js'
import disasterReportRouter from './routers/report.router.js'
import newsRouter from './routers/news.router.js'
import shelterRouter from './routers/shelter.router.js'
import mapRouter from './routers/maps.router.js'
import volunteerRouter from './routers/volunteer.router.js'
import ContactRouter from './routers/contact.router.js'
import RoadCloseRouter from './routers/roadClosure.router.js'
import EmailRouter from './routers/email.router.js'

import { dbconnect } from './config/database.config.js';
import multer from 'multer';

import { Server as SocketServer } from "socket.io";
import http from 'http';

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173'],
})
);

const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        credentials: true,
        origin: "http://localhost:5173"
    },
});

dbconnect(io);

app.use('/api/users', userRouter);
app.use('/api/requests', disasterRequestRouter);
app.use('/api/reports', disasterReportRouter);
app.use('/api/news', newsRouter);
app.use('/api/shelters', shelterRouter);
app.use('/api/maps', mapRouter);
app.use('/api/volunteers', volunteerRouter);
app.use('/api/contacts', ContactRouter);
app.use('/api/roadCloses', RoadCloseRouter);
app.use('/api/email', EmailRouter);

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
})