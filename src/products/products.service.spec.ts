import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';

import { ProductsService } from './products.service'

describe('CatService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  const dData = {
    "data": {
      "getProductById": {
        "ID": 263750,
        "OperatorInfo": {
          "WebsiteURL": "http://www.chargepoint.net/",
          "Comments": null,
          "PhonePrimaryContact": "1-408-841-4500",
          "PhoneSecondaryContact": null,
          "IsPrivateIndividual": false,
          "AddressInfo": null,
          "BookingURL": null,
          "ContactEmail": null,
          "FaultReportEmail": null,
          "IsRestrictedEdit": false,
          "ID": 5,
          "Title": "ChargePoint"
        },
        "StatusType": {
          "IsOperational": true,
          "IsUserSelectable": true,
          "ID": 50,
          "Title": "Operational"
        },
        "AddressInfo": {
          "ID": 264134,
          "Title": "GARAGE SOUTH LOT",
          "AddressLine1": "1100 Railroad Ave",
          "AddressLine2": null,
          "Town": "Bellingham",
          "StateOrProvince": "WA",
          "Postcode": "98225",
          "CountryID": 2,
          "Country": {
            "ISOCode": "US",
            "ContinentCode": "NA",
            "ID": 2,
            "Title": "United States"
          },
          "Latitude": 48.747759,
          "Longitude": -122.480063,
          "ContactTelephone1": "888-758-4389",
          "ContactTelephone2": null,
          "ContactEmail": null,
          "AccessComments": "24 hours daily",
          "RelatedURL": "http://www.chargepoint.com/",
          "Distance": null,
          "DistanceUnit": 0
        },
        "Connections": [
          {
            "ID": 446653,
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
            "Quantity": 2,
            "Comments": null
          }
        ]
      }
    }
  }
  describe('getCats', () => {
    it('should return all data', () => {
      expect(service.getProducts()).toEqual([ dData]);
    });
  });

  describe('getOneCat', () => {
    it('should successfully return data', () => {
      expect(service.getProductById(263752)).toEqual({ dData });
    });
    it('should throw an error', () => {
      const noIdCall = () => service.getProductById(263752343);
      expect(noIdCall).toThrowError(BadRequestException);
      expect(noIdCall).toThrowError('No data with id not an id found');
    });
  });

});