import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EventServiceProvider } from '../../providers/eventService';
import { EventModel } from '../../providers/event.model';

import { ViewController } from 'ionic-angular';
/*
  Generated class for the Addevent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
// class TechEvent {
//   // title:string;
//   // description:string;
//   // place:string;

//   constructor(){}


// }





@Component({
  selector: 'AddEvent',
  templateUrl: 'addevent.html'
})
export class AddEvent {
  title: any;
  description: any;
  location:any;
  
  office:any;
  address:any;
  isActive:boolean;
  numberOfParticipantsEstimated:number;
  startDate:any;
  endDate:any;

 public event: EventModel;
  
  private _eventServiceProvider: EventServiceProvider;

 
  constructor(public viewCtrl: ViewController,eventServiceProvider: EventServiceProvider ) {
 this._eventServiceProvider = eventServiceProvider;
 this.event= new EventModel();
  }
 
  save(): void {
 
    let event = {
      title: this.title,
      description: this.description,
      
      office:this.office,
      address:this.address,
      location:this.location,
    
      isActive:this.isActive,
      numberOfParticipantsEstimated: this.numberOfParticipantsEstimated,
      startDate:this.startDate,
      endDate:this.endDate
    };
 

    this.viewCtrl.dismiss(event);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
