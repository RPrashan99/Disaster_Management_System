import { model, Schema } from "mongoose";

export const AlertSchema = new Schema(
    {
        alertID : {type: String, required: true},
        disasterType: {type: String, required: true},
        warnningLevel: {type: String, required: true},
        message: {type: String, required: true}
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

export const AlertModel = model('alerts', AlertSchema);