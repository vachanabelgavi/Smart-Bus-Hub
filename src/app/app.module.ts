import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';


import { AppComponent } from './app.component';
import { BusesComponent } from './buses/buses.component';
import { DetailsComponent } from './details.component';
import { GetComponent } from './get.component';
import { ViewticketComponent } from './viewticket.component';

const appRoutes:Routes=[
  {path:'details',component:DetailsComponent},
  {path:'',component:BusesComponent},
  {path:'view',component:ViewticketComponent}
]

@NgModule({
  declarations: [
    
    AppComponent,
    BusesComponent,
    DetailsComponent,
    GetComponent,
    ViewticketComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent,GetComponent]
})
export class AppModule { }
