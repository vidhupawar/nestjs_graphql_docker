import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HttpModule, HttpService} from '@nestjs/axios'
import { Model } from 'mongoose';

import { Station } from './model/station';


@Injectable()
export class StationsService {
    private readonly httpService: HttpService

    async getStations(): Promise<Station> {
        this.httpService.get('https://api.openchargemap.io/v3/poi/?output=json&countrycode=US&maxresults=10?key=ff82541f-c8d1-4507-be67-bd07e3259c4e');
        return;  
    } 

    // public createStations(createUserData: CreateUserInput): User {
    //     const user: User = {
    //         userId: uuidv4(),
    //         ...createUserData
    //     }

    //     this.users.push(user);

    //     return user;
    // }
}