import { Component } from '@angular/core';
import {NavController,ModalController} from 'ionic-angular';
import {Reviews} from '../../providers/reviews';
import {AddReviewPage} from '../add-review-page/add-review-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  companies:any;
  users:any;
  constructor(public navCtrl: NavController,public reviewService: Reviews, public modalCtrl: ModalController) {

  }


  ionViewDidLoad() {
    this.reviewService.getReviews().then((data) => {
      console.log(data);
      this.companies = data;
    });


    this.reviewService.getUsers().then((data) => {
      console.log(data);
      this.users = data;
    })
    }


  // addReview() {
  //   let modal = this.modalCtrl.create(AddReviewPage);

  //   modal.onDidDismiss(review => {
  //     if(review){
  //       this.reviews.push(review);
  //       this.reviewService.createReview(review);
  //     }
  //   });

  //   modal.present();
  // }


  // deleteReview(review) {
  //   //remove locally
  //   let index = this.reviews.indexOf(review);

  //   if(index > -1){
  //     this.reviews.splice(index,1);
  //   }

  //   //remove from database
  //   this.reviewService.deleteReview(review._id);
  // }

}
