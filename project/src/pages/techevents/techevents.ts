import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, AlertController, LoadingController } from 'ionic-angular';
// import {AuthProvider} from '../../providers/auth';
// import {LoginPage} from '../login/login';
// import {Data} from '../../providers/mockdata';
// import {EventdetailPage} from '../eventdetail/eventdetail';

import {EventdetailPage} from '../eventdetail/eventdetail';


import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { LoginPage } from '../login/login';
import { EventServiceProvider } from '../../providers/eventService';

import { EventModel } from '../../providers/event.model';

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
  public event:EventModel;
  private _eventServiceProvider:EventServiceProvider;

  constructor(public navCtrl: NavController,
  public modalCtrl: ModalController, 
    public alertCtrl: AlertController,
     public params:NavParams,
  eventServiceProvider:EventServiceProvider) {

    
this._eventServiceProvider= eventServiceProvider;
     

   
    
    
     this.event = new EventModel();
      var eventIndustry = this.params.get('eventIndustry'); 
      console.log('eventidus is '+eventIndustry );


      this._eventServiceProvider.findByIndustry(eventIndustry).subscribe((events) => {
        this.events = events;
        console.log(this.events);
      })




  }





//   ionViewDidLoad() {
//     this.eventService.getEvents().then((data) => {
//           this.events = data;
//     }, (err) => {
//         console.log("not allowed");
//     });
//   }
  
// addEvent(){

//   let eventInput = prompt('Put the event');
//   if(eventInput) {
//     this.showLoader();
//     this.eventService.createEvent(eventInput).then((result) => {
//       this.loading.dismiss();
//       this.events = result;
//       console.log('event created');
//     },(err) => {
//       this.loading.dismiss();
//       console.log('Cannot create new event');
//       console.dir(err);
//     })
//   }
 
//     // let prompt = this.alertCtrl.create({
//     //   title: 'Add Event',
//     //   message: 'Describe your event below:',
//     //   inputs: [
//     //     {
//     //       name: 'title'
//     //     }
//     //   ],
//     //   buttons: [
//     //     {
//     //       text: 'Cancel'
//     //     },
//     //     {
//     //       text: 'Save',
//     //       handler: event => {
 
//     //             if(event){
 
//     //                 this.showLoader();
 
//     //                 this.eventService.createEvent(event).then((result) => {
//     //                     this.loading.dismiss();
//     //                     this.events = result;
//     //                     console.log("event created");
//     //                 }, (err) => {
//     //                     this.loading.dismiss();
//     //                     console.log(err);
//     //                     console.dir(err);
//     //                     console.log("not allowed");
//     //                 });
 
//     //             }
 
 
//     //       }
//     //     }
//     //   ]
//     // });
 
//     // prompt.present();
 
//   }
 
//   deleteEvent(event){
 
//     this.showLoader();
 
//     //Remove from database
//     this.eventService.deleteEvent(event._id).then((result) => {
 
//       this.loading.dismiss();
 
//       //Remove locally
//         let index = this.events.indexOf(event);
 
//         if(index > -1){
//             this.events.splice(index, 1);
//         }   
 
//     }, (err) => {
//       this.loading.dismiss();
//         console.log("not allowed");
//     });
//   }
 
//   showLoader(){
 
//     this.loading = this.loadingCtrl.create({
//       content: 'Authenticating...'
//     });
 
//     this.loading.present();
 
//   }
 
//   logout(){
 
//     this.authService.logout();
//     this.navCtrl.setRoot(LoginPage);
 
//   }
deleteEvent(event) {
  var orgId = this.event.organisation;
console.log('delte');
  // this._eventServiceProvider.deleteEvent(orgId, event._id).subscribe(() => {
  //   console.log('delete');

  // })
    
  }

  viewComments(item) {
    this.navCtrl.push(EventdetailPage,{eventId:item._id});
  }





}
