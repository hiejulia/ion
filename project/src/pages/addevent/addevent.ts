import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



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

 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let review = {
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
 
    this.viewCtrl.dismiss(review);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
