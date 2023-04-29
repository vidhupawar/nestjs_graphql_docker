// import * as mongoose from 'mongoose';

// export const StationSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true }
// });

// export interface Station extends mongoose.Document{
//     id: string;
//     title: string;
//     AddressInfo: object;
//     Connections: Array<CType>;
// }

// interface CType {
//     "ID": number,
//     "ConnectionTypeID": number,
//     "ConnectionType": object,
//     "Reference": string,
//     "StatusTypeID": number,
//     "StatusType": object,
//     "LevelID": number,
//     "Level": object,
//     "Amps": string,
//     "Voltage": string,
//     "PowerKW": number,
//     "CurrentTypeID": number,
//     "CurrentType": object,
//     "Quantity": number,
//     "Comments": string
//   }

export class Station {
    OperatorInfo: {
        "WebsiteURL": string,
        "Comments": string,
        "PhonePrimaryContact": string,
        "PhoneSecondaryContact": string,
        "IsPrivateIndividual": boolean,
        "AddressInfo": string,
        "BookingURL": string,
        "ContactEmail": string,
        "FaultReportEmail": string,
        "IsRestrictedEdit": boolean,
        "ID": number,
        "Title": string
    };
    StatusType: {
        "IsOperational": boolean,
        "IsUserSelectable": boolean,
        "ID": number,
        "Title": string
    };
    AddressInfo: {
        "ID": number,
        "Title": string,
        "AddressLine1": string,
        "AddressLine2": string,
        "Town": string,
        "StateOrProvince": string,
        "Postcode": string,
        "CountryID": number,
        "Country": object,
        "Latitude": number,
        "Longitude": number,
        "ContactTelephone1": string,
        "ContactTelephone2": string,
        "ContactEmail": string,
        "AccessComments": string,
        "RelatedURL": string,
        "Distance": string,
        "DistanceUnit": number
    };
    connections: Array<CType>

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