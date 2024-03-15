import {model, Schema} from 'mongoose'

export const NewsSchema = new Schema(
    {
        newsId: {type: String, required: true, unique: true},
        heading: {type: String, required: true},
        auther: {type: String, required: true},
        createdDate: {type: String, default: "none", required: true},
        createdTime: {type: String, default: "none", required: true},
        image: {type: String, default: "None"},
        newsBody: {type: String, default: "None",required: true},
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