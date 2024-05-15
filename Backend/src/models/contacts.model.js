import { model, Schema } from "mongoose";

export const ContactSchema = new Schema(
    {
        id : {type: String, required: true},
        department: {type: String, required: true},
        address: {type: String, required: true},
        hotline: {type: String, required: true},
        directDial: {type: String, required: true},
        contactName: {type: String, required: true},
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

export const ContactModel = model('contacts', ContactSchema);