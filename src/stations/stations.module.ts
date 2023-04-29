import { Module } from '@nestjs/common';
import { HttpModule} from '@nestjs/axios'
import { MongooseModule } from '@nestjs/mongoose';
import { StationsResolver } from './stations.resolver';
import { StationsService } from './stations.service';
// import { StationSchema } from './model/station';

@Module({
    imports: [
        // MongooseModule.forFeature([{name: 'Stations', schema: StationSchema}])
        HttpModule
    ],
    providers: [StationsResolver, StationsService]
    
})
export class StationsModule {
}