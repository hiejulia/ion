import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 import {  LoadingController,ToastController } from 'ionic-angular';  
import * as _ from 'lodash';
// import { Calendar } from '@ionic-native/calendar';

import { NavController, NavParams,ModalController } from 'ionic-angular'; 

import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { EventServiceProvider } from '../../providers/eventService';
import {OrganisationServiceProvider} from '../../providers/organisationService';

import { EventModel } from '../../providers/event.model';
import { SocialSharing } from '@ionic-native/social-sharing';


/*
  Generated class for the Eventdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html'
})
export class EventdetailPage {

  public event:EventModel;
  private _eventServiceProvider:EventServiceProvider;
  private _organisationServiceProvider:OrganisationServiceProvider;
 public cloneEvent;
 public cloneOrganisation;
 public thisEventId:any;
 public participants:any;
 public users:any;
 public checkRegister:boolean;
 public user:any;
 public usersParticipants:any=[];
 public participantsList:any=[];
 

//  review:any;
  constructor(private socialSharing: SocialSharing,public alertCtrl: AlertController,public navCtrl: NavController, public modalCtrl: ModalController,
   public params:NavParams,private toastCtrl: ToastController,
   
  eventServiceProvider:EventServiceProvider,organisationServiceProvider:OrganisationServiceProvider) {
    this._eventServiceProvider= eventServiceProvider;
      this._organisationServiceProvider= organisationServiceProvider;
     

   
    
    
     this.event = new EventModel();
      var eventId = this.params.get('eventId');//we have event id here

      this.thisEventId = eventId; 


      this._eventServiceProvider.findById(eventId).subscribe((event) => {
        this.event = event;
        this.cloneEvent = event;
        console.log(this.event);
        this._organisationServiceProvider.findById(this.event.organisation).subscribe((organisation) => {
          //this.event.organisation = organisation.name;

this.cloneOrganisation = organisation.name;
          console.log(this.event.organisation);
        })
      })


// this.listParticipants();

this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
  this.user = user;
  //user.registerEvents = []
  _.forEach(this.user.registerEvents,(regevent) => {
   if(eventId == regevent.registerEvents){
     this.checkRegister = true;

   } else {
     this.checkRegister  = false;
   }   
        
    });//end for each
});//end find user by id



this._eventServiceProvider.findById(this.thisEventId).subscribe((event) => {
  this.participants = event.participants;

         
});
   
  }

  

  //show map

  showMap(){
    console.log();
    this.navCtrl.push(GeolocationPage);
  }
goBack() {
    this.navCtrl.pop();
  }
// unparticipate(event){
//   console.log('unparticipate');
//   var userID=localStorage.getItem('user_Id');
//  let body ={
//   registerEvents:event._id,
//   isActive:false
//  }


// this._eventServiceProvider.updateUserRegisterEvents(body,userID).subscribe((user) => {
//   console.log('register event is saved in user profile');
// });

// this.checkRegister = true;

// }
doParticipate(event){
  let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to register for the event?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.participate(event);
            this.getToast();
          }
        }
      ]
    });

    alert.present();




}

doUnParticipate(event){
  let alert = this.alertCtrl.create({
      title: 'Confirm',
      message: 'Do you want to unregister for the event?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
           
             this.unparticipate(event);
            
          }
        },
        {
          text: 'No',
          handler: () => {
             console.log('Disagree clicked');
           
          }
        }
      ]
    });

    alert.present();

}
unparticipate(event){
  console.log('unparticipate event');
 
 let body ={
  registerEvents:event._id
 }
var userID=localStorage.getItem('user_Id');//get user id from localstorage
var useremail = this.user.email;

this._eventServiceProvider.updateUserRegisterEvents(body,userID).subscribe((user) => {
  console.log('register event is saved in user profile');
  this.checkRegister = false;
  this.load();
});


let body11 = {
  participantId:userID,
  participantEmail:useremail

}

 
this._eventServiceProvider.updateParticipants(body11,event._id).subscribe((event) => {
 // this.participants = event.participants;
  

 





})


 let toast = this.toastCtrl.create({
    message: 'Ok. You have unregistered event',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();

}

getToast(){
   let toast = this.toastCtrl.create({
    message: 'Thank you. You have registered for the event',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
load(){

  this._eventServiceProvider.findById(this.thisEventId).subscribe((event) => {
  this.participants = event.participants;
  console.log(this.participants);

});

}

participate(event){
  
  console.log('participate event');
 
 let body ={
  registerEvents:event._id
 }
var userID=localStorage.getItem('user_Id');
var useremail = this.user.email;

this._eventServiceProvider.updateUserRegisterEvents(body,userID).subscribe((user) => {
  console.log('register event is saved in user profile');
  this.checkRegister = true;
  this.load();
});


let body11 = {
  participantId:userID,
  participantEmail:useremail

}

 
this._eventServiceProvider.updateParticipants(body11,event._id).subscribe((event) => {
 // this.participants = event.participants;
  

 





})


// this.listParticipants();

// this.participants.forEach(function(participant, index){
//     this._organisationServiceProvider.findUserById(participant.participants[0]).subscribe((user) => {
// this.users.push(user);
// console.log('user lsit is');
// console.log(this.users);
//   });
// });



//cordova plugin for calendar goes here
// this.calendar.createEventWithOptions(this.event.title, this.event.location, this.event.description, new Date(this.event.startDate), new Date(this.event.endDate), null).then(() => {
//       this.getToast();
//     });


}


ionViewDidEnter(){
 
console.log('participant ion view will enter'+this.participants);



}

ionViewDidLoad(){
  this.usersParticipants = [];
  this._eventServiceProvider.findById(this.thisEventId).subscribe((event) => {
  this.participants = event.participants;

  
});

}
ionViewWillEnter(){
this.usersParticipants = [];
this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
  this.user = user;
  //user.registerEvents = []
  _.forEach(this.user.registerEvents,(regevent) => {
   if(this.thisEventId == regevent.registerEvents){
     this.checkRegister = true;
     

   } else {
     this.checkRegister  = false;
   }   
   console.log(this.checkRegister);
        
    });//end for each
});//end find user by id




this._eventServiceProvider.findById(this.thisEventId).subscribe((event) => {
  this.participants = event.participants;

  
})




}


  // ionViewWillEnter(){
    
  // let reviewId = this.params.get('reviewId');   

  //   this._eventServiceProvider.findById(reviewId).subscribe((data) => {
  //     this.event = data;
  //      console.log(this.event);

  //   });

  // }


// listParticipants(){
//   console.log('list part');
// //   this._eventServiceProvider.getParticipants(this.thisEventId).subscribe((participants) => {
// //     console.log('list of par is '+participants);
// // this.participants = participants;
// //   })
// }

share(){
  this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
  console.log('share email ok');
}).catch((err) => {
  // Sharing via email is not possible
  console.log(err);
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
console.log('share email ok');

}).catch((err) => {
  // Error!

  console.log(err);
});
}





}
