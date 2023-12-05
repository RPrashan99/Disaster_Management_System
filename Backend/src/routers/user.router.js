import { Router } from "express";
import { sample_user } from "../data.js";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";

const router = Router()
        
router.post('/login',(req,res) => {
    const { userName, password} = req.body;
    const user = sample_user.find(
        user => user.userName == userName && user.password == password
    );

    if (user){
        res.send(generateTokenResponse(user));
        return;
    }

    res.status(BAD_REQUEST).send("User name or password is incorrect")
});

const generateTokenResponse = user => {
    const token = jwt.sign({
        id: user.id,
        userName: user.userName,
        accessLevel: user.accessLevel,
        }, 
        "ThisIsPrivateKey",
        {
            expiresIn: '30d'
        }
    );

    return{
        id: user.id,
        userName: user.userName,
        accessLevel: user.accessLevel,
        token,
    };
};