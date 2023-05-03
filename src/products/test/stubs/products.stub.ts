import { Product } from "../../entities/product.entity";

export const productStub = (): Product => {
    return {
        "ID": 263706,
        "OperatorInfo": {
            "WebsiteURL": "https://semaconnect.com/",
            "Comments": null,
            "PhonePrimaryContact": null,
            "PhoneSecondaryContact": null,
            "IsPrivateIndividual": false,
            "AddressInfo": null,
            "BookingURL": null,
            "ContactEmail": null,
            "FaultReportEmail": null,
            "IsRestrictedEdit": false,
            "ID": 39,
            "Title": "SemaConnect"
        },
        "StatusType": {
            "IsOperational": true,
            "IsUserSelectable": true,
            "ID": 50,
            "Title": "Operational"
        },
        
        "AddressInfo": {
            "ID": 264090,
            "Title": "Arrive Noba Apartments",
            "AddressLine1": "8022 15th Avenue Northwest",
            "AddressLine2": null,
            "Town": "Seattle",
            "StateOrProvince": "WA",
            "Postcode": "98117",
            "CountryID": 2,
            "Country": {
                "ISOCode": "US",
                "ContinentCode": "NA",
                "ID": 2,
                "Title": "United States"
            },
            "Latitude": 47.687479,
            "Longitude": -122.376396,
            "ContactTelephone1": "800-663-5633",
            "ContactTelephone2": null,
            "ContactEmail": null,
            "AccessComments": "",
            "RelatedURL": "https://semaconnect.com/",
            "Distance": null,
            "DistanceUnit": 0
        },
        "Connections": [
            {
                "ID": 446600,
                "ConnectionTypeID": 1,
                "ConnectionType": {
                    "FormalName": "SAE J1772-2009",
                    "IsDiscontinued": null,
                    "IsObsolete": null,
                    "ID": 1,
                    "Title": "Type 1 (J1772)"
                },
                "Reference": null,
                "StatusTypeID": null,
                "StatusType": null,
                "LevelID": 2,
                "Level": {
                    "Comments": "Over 2 kW, usually non-domestic socket type",
                    "IsFastChargeCapable": false,
                    "ID": 2,
                    "Title": "Level 2 : Medium (Over 2kW)"
                },
                "Amps": 16,
                "Voltage": 230,
                "PowerKW": 3.7,
                "CurrentTypeID": 10,
                "CurrentType": {
                    "Description": "Alternating Current - Single Phase",
                    "ID": 10,
                    "Title": "AC (Single-Phase)"
                },
                "Quantity": 1,
                "Comments": null
            }
        ]
    }
}