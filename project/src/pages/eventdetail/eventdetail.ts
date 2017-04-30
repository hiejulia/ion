import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 

import { NavController, NavParams,ModalController } from 'ionic-angular';


import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { EventServiceProvider } from '../../providers/eventService';
import {OrganisationServiceProvider} from '../../providers/organisationService';

import { EventModel } from '../../providers/event.model';

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
//  review:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
   public params:NavParams,
  eventServiceProvider:EventServiceProvider,organisationServiceProvider:OrganisationServiceProvider) {
    this._eventServiceProvider= eventServiceProvider;
      this._organisationServiceProvider= organisationServiceProvider;
     

   
    
    
     this.event = new EventModel();
      var eventId = this.params.get('eventId'); 


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







  
  }

  

  //show map

  showMap(){
    console.log();
    this.navCtrl.push(GeolocationPage);
  }
goBack() {
    this.navCtrl.pop();
  }
participate(){
  console.log('part');
  //console.log(this.cloneEvent);

  // this._eventServiceProvider.putParticipant(this.cloneEvent.organisation,this.event._id).subscribe((event) => {
  //   console.log(event);
  //   this.event.participants = event.participants;
    

  // });



}

  //participant
//   participant(n){

//   // n.numberOfParticipants++;
//   console.log(n.numberOfParticipants ); 
//   var reviewId = n._id;
//   var numberOfParticipants = n.numberOfParticipants;


//   // this.reviewService.getReviewById(reviewId).subscribe((data) => {
//   //     this.review = data;
//     this.reviewService.updateReviewById(reviewId,numberOfParticipants).subscribe((result) => {
//       this.review.numberOfParticipants = result.numberOfParticipants;
//     })

// }

  // ionViewWillEnter(){
    
  // let reviewId = this.params.get('reviewId');   

  //   this._eventServiceProvider.findById(reviewId).subscribe((data) => {
  //     this.event = data;
  //      console.log(this.event);

  //   });

  // }

  }
 