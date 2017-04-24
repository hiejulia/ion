import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { JobServiceProvider } from '../../providers/jobService';

import { JobModel } from '../../providers/job.model';

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

  public event:JobModel;
  private _jobServiceProvider:JobServiceProvider;
 
 review:any;
  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth, public params:NavParams,
  jobServiceProvider:JobServiceProvider) {
    this._jobServiceProvider= jobServiceProvider;
    //  this.review = this.params.get('review'); 

    var reviewId = this.params.get('reviewId'); 
     console.log(reviewId);  
     this.event = new JobModel();
 console.log(typeof(this.review));
      console.log(this.review["location"]);

    });
  }

  // ionViewWillEnter(){
   
 
  //    var reviewId = this.params.get('reviewId'); 
  //    console.log(reviewId);  

  //   this.reviewService.getReviewById(reviewId).subscribe((data) => {
  //     this.review = data;
  //     console.log(this.review);

  //   });
 
  // }

  //show map

  showMap(l){
    console.log(l.location);
    this.navCtrl.push(GeolocationPage);
  }
goBack() {
    this.navCtrl.pop();
  }


  //participant
  participant(n){

  // n.numberOfParticipants++;
  console.log(n.numberOfParticipants ); 
  var reviewId = n._id;
  var numberOfParticipants = n.numberOfParticipants;


  // this.reviewService.getReviewById(reviewId).subscribe((data) => {
  //     this.review = data;
    this.reviewService.updateReviewById(reviewId,numberOfParticipants).subscribe((result) => {
      this.review.numberOfParticipants = result.numberOfParticipants;
    })

}

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

  
 
  
 
  


