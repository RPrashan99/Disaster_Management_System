import { model, Schema } from "mongoose";

export const DisasterRequestSchema = new Schema(
    {
        disasterType: {type: String, required: true},
        disasterLocation: {type: String, required: true},
        requestTime: {type: String, required: true},
        reqtuestDate: {type: String, required: true},
    },
    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const DisasterRequestModel = model('disasterRequest', DisasterRequestSchema);