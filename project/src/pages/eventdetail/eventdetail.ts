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
 
//  review:any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
   public params:NavParams,
  eventServiceProvider:EventServiceProvider) {
    this._eventServiceProvider= eventServiceProvider;
    //  this.review = this.params.get('review'); 

//     var eventId = this.params.get('eventId'); 
    
//      console.log(eventId);  
//      this.event = new EventModel();
// //  console.log(typeof(this.review));
// //       console.log(this.review["location"]);

//       this._eventServiceProvider.findById(eventId).subscribe((event) => {
//         this.event = event;
//       })

  
  }

  

  //show map

  showMap(){
    console.log();
    this.navCtrl.push(GeolocationPage);
  }
goBack() {
    this.navCtrl.pop();
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

  //   this.reviewService.getReviewById(reviewId).subscribe((data) => {
  //     this.review = data;
  //     // console.log(this.review);

  //   });

  // }

  }
 
  // ionViewDidLoad(){
 
  //   // this.reviewService.getReviews().then((data) => {
  //   //   console.log(data);
  //   //   this.reviews = data;
  //   // });

   
 
  // }



  // getReviewById(){
  //   this.review = this.reviewService.getReviewById("58fa0f5e43cc35cbdbbbd6cf").then((data) => {
  //     this.review = data;
  //     console.log(this.review);

  //   });

  
 
  
 
  


