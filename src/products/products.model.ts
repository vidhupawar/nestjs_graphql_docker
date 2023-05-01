import * as mongoose from 'mongoose';
const uuid = require('uuid');

export interface Product extends mongoose.Document{

    "UserComments": string,
    "PercentageSimilarity": string,
    "MediaItems": string,
    "IsRecentlyVerified": boolean,
    "DateLastVerified": string,
    "ID": number,
    "UUID": string,
    "ParentChargePointID": string,
    "DataProviderID": number,
    "DataProvidersReference": string,
    "OperatorID": number,
    "OperatorsReference": string,
    "UsageTypeID": number,
    "OperatorInfo": Object;
    "StatusType": Object;
    "AddressInfo": Object;
    "Connections": Array<CType>;
    "NumberOfPoints": string,
    "GeneralComments": string,
    "DatePlanned": string,
    "DateLastConfirmed": string,
    "StatusTypeID": number,
    "DateLastStatusUpdate": string,
    "MetadataValues": string,
    "DataQualityLevel": number,
    "DateCreated": string,
    "SubmissionStatusTypeID": number
}
interface CType {
    "ID": number,
    "ConnectionTypeID": number,
    "ConnectionType": object,
    "Reference": string,
    "StatusTypeID": number,
    "StatusType": object,
    "LevelID": number,
    "Level": object,
    "Amps": string,
    "Voltage": string,
    "PowerKW": number,
    "CurrentTypeID": number,
    "CurrentType": object,
    "Quantity": number,
    "Comments": string
  }

export const ProductSchema = new mongoose.Schema({
    _id:{
        type: String,
        default: () => uuid.v4(), 
    },
    OperatorInfo: { type: Object },
    StatusType: { type: Object },
    AddressInfo: { type: Object },
    Connections: { type : Array},
    UserComments: { type: String },
    PercentageSimilarity: { type: String },
    MediaItems: { type: String },
    IsRecentlyVerified: { type: Boolean },
    DateLastVerified: { type: String },
    ID: { type: Number },
    UUID: { type: String },
    ParentChargePointID: { type: String },
    DataProviderID: { type: Number },
    DataProvidersReference: { type: String },
    OperatorID: { type: Number },
    OperatorsReference: { type: String },
    UsageTypeID: { type: Number },
    NumberOfPoints: { type: String },
    GeneralComments: { type: String },
    DatePlanned: { type: String },
    DateLastConfirmed: { type: String },
    StatusTypeID: { type: Number },
    DateLastStatusUpdate: { type: String },
    MetadataValues: { type: String },
    DataQualityLevel: { type: Number },
    DateCreated: { type: String },
    SubmissionStatusTypeID: { type: Number }
})