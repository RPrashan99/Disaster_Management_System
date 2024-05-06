import { model, Schema } from "mongoose";

export const ContactInfoSchema = new Schema(
    {
        contactID : {type: String, required: true},
        authority: {type: String, required: true},
        address: {type: String, required: true},
        hotline: {type: String, required: true},
        directDial: {type: String, required: true},
        name: {type: String, required: true},
        title: {type: String, required: true},
        mobile: {type: String, required: true},
        email: {type: String, required: true}
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

export const ContactInfoModel = model('contactInfo', ContactInfoSchema);