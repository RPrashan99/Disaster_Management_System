import dotenv from 'dotenv';
dotenv.config();
import {dbconnect} from './config/database.config.js';
import multer from 'multer';
import app from './app.js'

dbconnect();

const PORT = 5000;
app.listen(PORT, () =>{
    console.log('listening on port '+ PORT);
})