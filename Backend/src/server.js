import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from 'cors';
import userRouter from './routers/user.router.js';
import disasterRequestRouter from './routers/request.router.js'
import disasterReportRouter from './routers/report.router.js'
import newsRouter from './routers/news.router.js'
import { Server } from 'socket.io';
import {createServer} from 'http';
import {dbconnect} from './config/database.config.js';

const app = express();
app.use(express.json());

app.use(cors({
    credentials:true,
    origin: ['http://localhost:5173'],
    })
);

const server = createServer(app);
const io = new Server(server);

dbconnect(io);

app.use('/api/users',userRouter);
app.use('/api/requests',disasterRequestRouter);
app.use('/api/reports', disasterReportRouter);
app.use('/api/news', newsRouter);

const PORT = 5000;
server.listen(PORT, () =>{
    console.log('listening on port '+ PORT);
})