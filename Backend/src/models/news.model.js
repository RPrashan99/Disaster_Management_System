import {model, Schema} from 'mongoose'

export const NewsSchema = new Schema(
    {
        newsId: {type: String, required: true, unique: true},
        heading: {type: String, required: true},
        auhter: {type: String, required: true},
        createdDate: {type: String, required: true},
        createdTime: {type: String, required: true},
        image: {type: String, default: "None"},
        newsBody: {type: Number, required: true},
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

export const NewsModel = model('news', NewsSchema);