import { Resolver, Query, Args} from '@nestjs/graphql';
import { Station } from './model/station';
import { StationsService } from './stations.service';
import { GetStationArgs } from './dto/agrs/get-station.agrs';


@Resolver(() => Station)
export class StationsResolver {
    constructor( private readonly stationsService:  StationsService) {}

    @Query(() => Station, {name: 'station', nullable: true})
    getStations(@Args() getStationArgs: GetStationArgs): Station {
        return;
        // return this.stationsService.getStations();
    }
}