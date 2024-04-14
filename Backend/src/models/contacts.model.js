import {model, Schema} from 'mongoose';

export const ContactSchema = new Schema(
    {
        id: {type: String, required: true},
        contactName: {type: String, required: true},
        number: {type: String, required: true},
        address: {type: String, required: true},
        department: {type: String, required: true}
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

export const ContactModel = model('contacts', ContactSchema);