import { ArgsType, Field} from '@nestjs/graphql';
import { isArray } from 'class-validator';

@ArgsType()
export class GetStationArgs {
    @Field()
    OperatorInfo:{
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
    }

    
}