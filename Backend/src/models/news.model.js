import {model, Schema} from 'mongoose'

export const NewsSchema = new Schema(
    {
        newsId: {type: String, required: true},
        userName: {type: String, required: true, unique: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        address: {type: String, default: "none"},
        accessLevel: {type: Number, default: 1},
        department: {type: String, default: "None"},
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
)