import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import {Ticket} from './ticket';
import 'rxjs/add/operator/map';


@Injectable()
export class TicketService {

  constructor(private http:Http){ }

  addTicket(newTicket)
    {
        var headers=new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('http://localhost:3000/api/addTicket',newTicket,{headers:headers})
        .map(res=>res.json());
    }

}
