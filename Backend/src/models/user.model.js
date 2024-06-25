import {model, Schema} from 'mongoose';

export const UserSchema = new Schema(
    {
        id: {type: String, required: true},
        userName: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        address: {type: String, default: "none"},
        accessLevel: {type: Number, default: 1},
        department: {type: String, default: "None"},
        telephoneNumber: {type: String, required: true},
        lastLogged: {type: Date, default: "2023/10/12"}
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        toObject : {
            virtuals: true,
        },
    }
);

export const UserModel = model('user', UserSchema);