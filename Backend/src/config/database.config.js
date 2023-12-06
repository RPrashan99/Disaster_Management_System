import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { DisasterRequestModel } from "../models/disasterRequest.model.js";
import { sample_user } from "../data.js";
import bcrypt from 'bcrypt';
const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true);

export const dbconnect = async () => {
    try{
        connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUsers();
        console.log('connect successfully---!');
    } catch (error) {
        console.log(error);
    }
};

async function seedUsers() {
    const usersCount = await UserModel.countDocuments();
    if(usersCount > 0 ) {
        console.log('User seed is already done!');
        return;
    }

    for(let user of sample_user) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }

    console.log('User seed is done!');
}