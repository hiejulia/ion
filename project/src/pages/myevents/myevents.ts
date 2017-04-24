import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';
import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';

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
  reviews: Array<Object>;
 
  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth) {
 
  }
 
  ionViewDidLoad(){
    // this.todoService.load()
    //     .subscribe(data => {
    //       this.todos = data;
    //     })
 //get all
    this.reviewService.getReviews().subscribe(data => {
        this.reviews = data;
    });
 
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AddEvent);
 
    modal.onDidDismiss(review => {
      if(review){
        this.reviews.push(review);
        this.reviewService.createReview(review);        
      }
    });
 
    modal.present();
 
  }
 
  deleteReview(review){
 
    //Remove locally
      let index = this.reviews.indexOf(review);
 
      if(index > -1){
        this.reviews.splice(index, 1);
      }   
 
    //Remove from database
    this.reviewService.deleteReview(review._id);
  }


  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }

  goToDetail(review){
    console.log('go to the detail page');
    // this.navCtrl.push(EventdetailPage);
        this.navCtrl.push(EventdetailPage, {reviewId: review._id}); 


  // speakerDetail(speaker) { 
  //   this.nav.push(SpeakerDetail, {speaker: speaker}); 
  // } 

}
}
