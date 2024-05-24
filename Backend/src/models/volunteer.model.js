import {model, Schema} from 'mongoose';

export const VolunteerSchema = new Schema(
    {
        id: {type: String, required: true},
        fullName: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        nicNumber: {type: String, required: true, unique: true},
        phoneNumber: {type: String, required: true},
        age: {type: Number, required: true},
        address: {type: String, required: true},
        province: {type:String, required: true},
        skills: {type: [String], default: []},
        experience: {type: String, default: "None"},
        motivation: {type: String, default: "None"},
        createdDate: {type: String, required: true},
        status: {type: String, default: "Pending"}
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

export const VolunteerModel = model('volunteers', VolunteerSchema);