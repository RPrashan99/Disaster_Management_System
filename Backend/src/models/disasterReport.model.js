import { model, Schema } from "mongoose";

export const DisasterReportSchema = new Schema(
    {
        reportID : {type: String, required: true},
        disasterType: {type: String, required: true},
        severity: {type: String, required: true},
        disasterLocation: {type: [String], required: true},
        affectedCount: {type: Number, required: true},
        affectedCountByDate: {
            type: [
                {
                    date: String,
                    count: Number
                }
            ],
            default: []
        },
        affectedLocations: {
            type: [
                {
                  latitude: Number,
                  longitude: Number
                }
              ],
            default: []},
        disasterRequests: {type: [String], default: null},
        createdDate: {type: String, required: true},
        updatedDate: {type: String, required: true},
        confirmed: {type: Boolean, default: false},
        respondSent: {type: Boolean, default: false},
        alertSent: {type: Boolean, default: false},
        shelterLocations: {type: String, default: "None"},
        evacuationRoutes: {type: String, default: "None"},
        finished: {type: Boolean, default: false}
    },

    {
        toJSON: {
            virtuals: true,
        },
        toObject: {
            virtuals: true,
        },
        timestamps: false,
    }
);

export const DisasterReportModel = model('disasterReport', DisasterReportSchema);