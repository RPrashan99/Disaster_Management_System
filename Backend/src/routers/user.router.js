import { Router } from "express";
import jwt from "jsonwebtoken";
import { BAD_REQUEST } from "../constants/httpStatus.js";
import handler from 'express-async-handler';
import { UserModel } from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { currentDateExtract } from "../common/dateExtract.js";

const PASSWORD_HASH_SALT_ROUNDS = 10;
const router = Router()

router.post('/login', handler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password)) && user.accessLevel == 1) {
            res.send(generateTokenResponse(user));
        } else {
            res.status(BAD_REQUEST).send("User name or password is incorrect");
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("Login failed!");
    }
}));

router.post('/loginAdmin', handler(async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password)) && user.accessLevel == 3) {
            await UserModel.findOneAndUpdate(
                { email: email }, // Filter by userName
                { lastLogged: new Date() }, // Update the lastLogged field
            );
            res.send(generateTokenResponse(user));
        } else {
            res.status(BAD_REQUEST).send("User name or password is incorrect");
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("Login failed!");
    }
}));

router.post(
    '/register',
    handler(async (req, res) => {
        const { userName, email, password, address, telephoneNumber } = req.body;

        const user = await UserModel.findOne({ email });

        if (user) {
            res.status(BAD_REQUEST).send('User name already taken, please enter another!');
            return;
        }

        const hashedPassword = await bcrypt.hash(
            password,
            PASSWORD_HASH_SALT_ROUNDS
        );

        const newUser = {
            id: (await generateID()).toString(),
            userName,
            email,
            password: hashedPassword,
            address,
            telephoneNumber
        };

        const result = await UserModel.create(newUser);
        res.send(generateTokenResponse(result));
    })
);

router.post('/setAccess', handler(async (req, res) => {

    const { userName, email, password, address, accessLevel, department } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
        res.status(BAD_REQUEST).send('User name already taken, please enter another!');
        return;
    }

    const hashedPassword = await bcrypt.hash(
        password,
        PASSWORD_HASH_SALT_ROUNDS
    );

    const newUser = {
        id: (await generateID()).toString(),
        userName,
        email,
        password: hashedPassword,
        address,
        accessLevel,
        department,
    };

    const result = await UserModel.create(newUser);
    res.send(generateTokenResponse(result));
}));

router.post('/searchUser', handler(async (req, res) => {

    const { id } = req.body;
    try {
        const user = await UserModel.findOne({ id, accessLevel: 1 });
        if (user) {
            res.send(user);
            return;
        } else {
            res.send('');
            return;
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("User id not found");
    }

}));

router.post('/searchAdmin', handler(async (req, res) => {

    const { id } = req.body;
    try {
        const user = await UserModel.findOne({ id, accessLevel: { $gt: 1 } });
        if (user) {
            res.send(user);
            return;
        } else {
            res.send('');
            return;
        }
    } catch (error) {
        res.status(BAD_REQUEST).send("User id not found");
    }

}));

router.post('/getAll', handler(async (req, res) => {

    try {
        const users = await UserModel.find({});
        res.send(users);
    } catch (error) {
        res.status(BAD_REQUEST).send("Users not found");
    }

}));

router.post('/getUserActive', handler(async (req, res) => {

    const today = new Date();

    try {
        const result = await UserModel.aggregate([
            {
                $match: {
                    accessLevel: { $in: [1, 2, 3] }
                }
            },
            {
                $group: {
                    _id: '$accessLevel',
                    count: { $sum: 1 },
                    users: { $push: '$$ROOT' }
                }
            },
            {
                $project: {
                    _id: 0,
                    accessLevel: '$_id',
                    count: 1,
                    users: 1
                }
            }
        ]);
        let userActive = 0;
        let adminActive = 0;

        for (const access in result) {
            if (access == 0) {
                const users = result[0].users;
                for (const p in users) {
                    const timeDifference = today - users[p].lastLogged;
                    const daysDifference = timeDifference / (1000 * 3600 * 24);

                    if(daysDifference < 7){
                        userActive++;
                    }
                }
            } else {
                const admins = result[access].users;
                for (const a in admins) {
                    const timeDifference = today - admins[a].lastLogged;
                    const daysDifference = timeDifference / (1000 * 3600 * 24);

                    if(daysDifference < 7){
                        adminActive++;
                    }
                }
            }
        }

        const data = {
            "totalUsers": result[0].count, 
            "totalAdmins": result[1].count + result[2].count,
            "activeUsers": userActive,
            "activeAdmins": adminActive,
        }

        res.send(data);
    } catch (error) {
        res.status(BAD_REQUEST).send("Users not found");
    }
}));

router.post(
    '/assignAdmin',
    handler(async (req, res) => {
        const { name, department, email, password, accessLevel, address } = req.body;

        const user = await UserModel.findOne({ email });

        if (user) {
            res.status(BAD_REQUEST).send('User name already taken, please enter another!');
            return;
        }

        const hashedPassword = await bcrypt.hash(
            password,
            PASSWORD_HASH_SALT_ROUNDS
        );

        const currentDate = currentDateExtract();

        const newUser = {
            id: (await generateID()).toString(),
            userName: name,
            email,
            password: hashedPassword,
            address,
            accessLevel,
            department: department
        };

        const result = await UserModel.create(newUser);
        res.send(generateTokenResponse(result));
    })
);

const generateTokenResponse = user => {
    const token = jwt.sign({
        id: user.id,
        userName: user.userName,
        email: user.email,
        accessLevel: user.accessLevel,
    },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        }
    );

    return {
        id: user.id,
        userName: user.userName,
        address: user.address,
        email: user.email,
        accessLevel: user.accessLevel,
        token,
    };
};

const generateID = async () => {
    var count = await UserModel.countDocuments();

    while (await UserModel.findOne({ id: count.toString() })) {
        count++;
    }

    return count;
};

export default router;