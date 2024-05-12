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

const app = express();

app.use(express.json());

app.use(cors({
    credentials:true,
    origin: ['http://localhost:5173'],
    })
);

app.use('/api/users',userRouter);
app.use('/api/requests',disasterRequestRouter);
app.use('/api/reports', disasterReportRouter);
app.use('/api/news', newsRouter);
app.use('/api/shelters', shelterRouter);
app.use('/api/maps', mapRouter);
app.use('/api/volunteers', volunteerRouter);
app.use('/api/contacts', ContactRouter);

export default app;