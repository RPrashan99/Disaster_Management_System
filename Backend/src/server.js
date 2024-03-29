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
const io = new Server(server,{
    cors: {
        credentials:true,
        origin: ['http://localhost:5173']
    }
});

dbconnect(io);

io.on('connection', (socket) => {
    console.log('New client connected');

    // Handle socket events here

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.use('/api/users',userRouter);
app.use('/api/requests',disasterRequestRouter);
app.use('/api/reports', disasterReportRouter);
app.use('/api/news', newsRouter);

const PORT = 5000;
server.listen(PORT, () =>{
    console.log('listening on port '+ PORT);
})