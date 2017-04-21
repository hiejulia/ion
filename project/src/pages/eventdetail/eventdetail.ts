import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';



import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';



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

  
 
 review:any;
  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth, public params:NavParams) {

    //  this.review = this.params.get('review'); 
    let reviewId = this.params.get('review');   

    this.review = this.reviewService.getReviewById(reviewId).then((data) => {
      this.review = data;
      // console.log(this.review);

    });
  }
       
 
  }
 
  // ionViewDidLoad(){
 
  //   // this.reviewService.getReviews().then((data) => {
  //   //   console.log(data);
  //   //   this.reviews = data;
  //   // });

   
 
  // }

  // ionViewWillEnter(){
  //    this.getReviewById();

  // }


  // getReviewById(){
  //   this.review = this.reviewService.getReviewById("58fa0f5e43cc35cbdbbbd6cf").then((data) => {
  //     this.review = data;
  //     console.log(this.review);

  //   });

  
 
  
 
  


