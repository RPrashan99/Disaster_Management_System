import { model, Schema } from "mongoose";

export const DisasterRequestSchema = new Schema(
    {
        requestID : {type: String, required: true},
        disasterType: {type: String, required: true},
        requesterName: {type:String, required:true},
        disasterLocation: {type: String, required: true},
        affectedCount: {type: Number, required: true},
        medicalNeed: {type: Boolean, default: false},
        otherNeeds: {type: String, required: false},
        requestTime: {type: String, required: true},
        requestDate: {type: String, required: true},
        read: {type: Boolean, default: false},
        verify: {type: Boolean, default: false}
    },
   
    {
        toJSON:
        {
            virtuals: true,
        },
        toObject: 
        {
            virtuals: true,
        },
        timestamps: true,
    }
);

export const DisasterRequestModel = model('disasterRequest', DisasterRequestSchema);