import {model, Schema} from 'mongoose'

export const RoadClosureSchema = new Schema(
    {
        roadCloseId: {type: String, required: true},
        closeLatLang :{
            type: [
                {
                    latitude: Number,
                    longitude: Number,
                }
            ],
            required: true},
        details: {type: String, required: true},
        createdDate: {type: String, required: true},
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

export const RoadClosureModel = model('roadClosures', RoadClosureSchema);