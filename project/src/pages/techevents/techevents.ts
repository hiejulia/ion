import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, AlertController, LoadingController } from 'ionic-angular';
// import {AuthProvider} from '../../providers/auth';
// import {LoginPage} from '../login/login';
// import {Data} from '../../providers/mockdata';
// import {EventdetailPage} from '../eventdetail/eventdetail';

import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';

/*
  Generated class for the Techevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'TechEvents',
  templateUrl: 'techevents.html'
})
export class TechEvents {
  events: any;
  loading: any;


  constructor(public navCtrl: NavController,
  public eventService: Events, public modalCtrl: ModalController, 
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {

      //subscribe from server call
      // this.techevents.subscribe((t => {
      //   this.techevents.push(t);
      // }))



  }

  ionViewDidLoad() {
    this.eventService.getEvents().then((data) => {
          this.events = data;
    }, (err) => {
        console.log("not allowed");
    });
  }
  
addEvent(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Event',
      message: 'Describe your todo below:',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: todo => {
 
                if(todo){
 
                    this.showLoader();
 
                    this.eventService.createEvent(event).then((result) => {
                        this.loading.dismiss();
                        this.events = result;
                        console.log("todo created");
                    }, (err) => {
                        this.loading.dismiss();
                        console.log("not allowed");
                    });
 
                }
 
 
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  deleteEvent(event){
 
    this.showLoader();
 
    //Remove from database
    this.eventService.deleteEvent(event._id).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.events.indexOf(event);
 
        if(index > -1){
            this.events.splice(index, 1);
        }   
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }
}
