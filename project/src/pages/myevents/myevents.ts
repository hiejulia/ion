import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'MyEvents',
  templateUrl: 'myevents.html'
})
export class MyEvents {
  myevents: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // this.myevents = data;



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventsPage');
  }

}
