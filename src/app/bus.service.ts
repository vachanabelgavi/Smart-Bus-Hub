import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Bus} from './bus';
import 'rxjs/add/operator/map';

@Injectable()
export class BusService{
    constructor(private http:Http){ }

    getBuses()
    {
        return this.http.get('http://localhost:3000/api/getBus')
        .map(res=>res.json());
    }

    queryBus(src,dest)
    {
        return this.http.get('http://localhost:3000/api/queryBus/'+src +'&'+dest)
            .map(res=>res.json());
    }
    queryBusNum(num)
    {
        return this.http.get('http://localhost:3000/api/queryBusNum/'+num)
            .map(res=>res.json());
    }


}