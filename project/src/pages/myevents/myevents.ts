import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
//create mock up data
const data = [
{
id:'1',
name:'hien1'


},
{
id:'2',
name:'hien2'


},{
id:'3',
name:'hien3'


},
];




@Component({
  selector: 'MyEvents',
  templateUrl: 'myevents.html'
})
export class MyEvents {
  myevents: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myevents = data;



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyeventsPage');
  }

}
