import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { JobServiceProvider } from '../../providers/jobService';
import { JobModel } from '../../providers/job.model';

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
  rating: any;
  content:any;
  location:any;
  organization:any;
  isActive:boolean;
  numberOfParticipants:number;
  startDate:any;
  endDate:any;

 public event: JobModel;
  
  private _jobServiceProvider: JobServiceProvider;

 
  constructor(public viewCtrl: ViewController,jobServiceProvider: JobServiceProvider ) {
 this._jobServiceProvider = jobServiceProvider;
 this.event= new JobModel();
  }
 
  save(): void {
 
    let event = {
      title: this.title,
      description: this.description,
      rating: this.rating,
      content:this.content,
      location:this.location,
      organization:this.organization,
      isActive:this.isActive,
      numberOfParticipants: this.numberOfParticipants,
      startDate:this.startDate,
      endDate:this.endDate
    };
 
    this.viewCtrl.dismiss(event);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
