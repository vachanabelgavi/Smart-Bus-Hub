import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-view',
  template:`
  <h1>Ticket details</h1>
    <h2>Bus Number: {{busNum}}</h2><br>
    <h3>From: {{src}}</h3><br>
    <h3>To: {{dest}}</h3><br>
    
    <h3>Total amount:: Rs{{amt}}</h3><br>
  `
})
export class ViewticketComponent implements OnInit {
  title = 'app';
    amt:number;
    busNum:number;
    src:String;
    dest:String;
    time:String;

  constructor(
    private route: ActivatedRoute,
    private router: Router){}

  ngOnInit() {
    
      this.route.queryParams.subscribe((params: Params) => {
         this.amt = params['amt'];
         this.busNum = params['busNum'];
        this.src=params['s'];
        this.dest=params['d'];
        this.time=params['depTime'];
        //this.depTime=params['time'];
        //console.log(this.userId);
      });
  }

}
