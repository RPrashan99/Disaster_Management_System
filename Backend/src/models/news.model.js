import {model, Schema} from 'mongoose'

export const NewsSchema = new Schema(
    {
        newsId: {type: String, required: true},
        heading: {type: String, required: true},
        author: {type: String, required: true},
        createdDate: {type: String, required: true},
        createdTime: {type: String, required: true},
        image: {data: Buffer , contentType: String},
        newsBody: {type: String, required: true},
        show: {type: Boolean, default:false} //if and only if show is true news are displayed in the user's side
    },
    {
        timestamps: false,
        toJSON: {
            virtuals: true,
        },
        toObject : {
            virtuals: true,
        },
    }
);

export const NewsModel = model('news', NewsSchema);