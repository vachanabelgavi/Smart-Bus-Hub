import { Component,OnInit } from '@angular/core';
import {BusService} from './bus.service';
import {Bus} from './bus';
import {Ticket} from './ticket';
import {TicketService} from './ticket.service';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-details',
  template:`
    
  <form #form="ngForm" (ngSubmit)="msg(form.value)">
  <fieldset>
    <legend>Add details</legend>
    
      <div class="form-group">
        <label>Name :</label> &nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="name" name="name" placeholder="Enter name" [(ngModel)]="one" required>
      </div>
      <div class="form-group">
        <label>Age :</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="Number" name="a" id="a" placeholder="Age" [(ngModel)]="two" required>
      </div>

      <div class="form-group">
        <label>Gender :</label> &nbsp;&nbsp;&nbsp;
        <input type="text" id="gender" name="gender" placeholder="Gender" [(ngModel)]="three" required>
      </div>  

      <div class="form-group">
        <label>Journey date :</label> &nbsp;&nbsp;&nbsp;
        <input type="Date" id="gender" name="gender" [(ngModel)]="four" required>
      </div>  


      

      <input type="button" (click)="msg()" value="Submit" class="btn btn-danger"><br><br>
      <input type="button" (click)="clear()" value="Add another person" class="btn btn-danger"><br>
      <a [routerLink]="['/view']" [queryParams]="{amt:totalAmt,busNum:num,s:src,d:dest,time:depTime}">View ticket details</a>
      
  

  ` ,
  providers:[BusService,TicketService]
  
})
export class DetailsComponent implements OnInit{

  buses:Bus[];
  bus:Bus;
  num:number;
  i:number;
  one:number;
  two:number;
  three:number;
  four:number;

  id:Number;
  src:String;
  dest:String;
  adult:number;
  child:number;
  depTime:String;
  userId:Number;
  title = 'app';
  totalAmt:number;
  age:number;
  adu:number;
  chi:number;
  ticketNum:number;
  busNum:number;
  
  tickets:Ticket[];
  ticket:Ticket;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: BusService,
    private ticketService: TicketService) {}

    add(n1:number,n2:number){
      return(n1+n2);
    }


  msg(form:any){
    alert("Successfully booked!");
    (this.i)=Number(this.i)+1;
    console.log(this.i);
    if(this.two<18){
      this.totalAmt=this.totalAmt+Number(this.chi);
      console.log("Child" +this.totalAmt);
    }else{
      console.log("Adult");
      this.totalAmt=this.totalAmt+Number(this.adu);
      console.log("Adult" +this.totalAmt);
    }
    const newTicket={
        ticketNum:Math.floor(Math.random()*100),
        busNum: this.num,
        name: this.one,
        from:this.src,
        to:this.dest,
        age:this.two,
        gender: this.three,
        depDate:this.four,
        depTime: this.depTime
    }
    this.ticketService.addTicket(newTicket)
      .subscribe(tickets=>{
        this.tickets=tickets;
      })

    /*var buses=this.buses;
    this.busService.queryBusNum(this.userId)
          .subscribe(data=>{
            }
            
          );*/

  }

  clear(){
    this.one=null;
    this.two=null;
    this.three=null;
  }

  ngOnInit() {
    this.totalAmt=0;
    /*this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['num'] || 0;

        //console.log('Query param page: ', this.page);
      });*/

      this.route.queryParams.subscribe((params: Params) => {
         this.adu = params['ad'];
         this.chi = params['ch'];
        this.num=params['busNum'];
        this.src=params['src'];
        this.dest=params['dest'];
        this.depTime=params['time'];
        //console.log(this.userId);
      });
  }
  
}
