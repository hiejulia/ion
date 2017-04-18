import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
  // techEvents:TechEvent = new TechEvent();

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }


  //onSubmit
  // onSubmit(name, description, type) {
  //   // this._data.addTechEvents(this.techEvents);
  //   // this.techEvents = new TechEvent();
  //   // this.navCtrl.parent.select(0);//navigate to TechEvents page 1 parent : 0
  // }

}
