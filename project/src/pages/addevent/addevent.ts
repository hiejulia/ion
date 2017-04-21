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
 
  constructor(public viewCtrl: ViewController) {
 
  }
 
  save(): void {
 
    let review = {
      title: this.title,
      description: this.description,
      rating: this.rating
    };
 
    this.viewCtrl.dismiss(review);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
