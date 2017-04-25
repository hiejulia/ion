import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';
import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import { JobServiceProvider } from '../../providers/jobService';
import { JobModel } from '../../providers/job.model';

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
  // reviews: Array<Object>;
    public organisation: any;

 public events: Array<JobModel>;
  private _jobsServiceProvider: JobServiceProvider;
  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth,jobsServiceProvider: JobServiceProvider) {
    this._jobsServiceProvider = jobsServiceProvider;
     let query :any ={};
    if(this.organisation){
      query.organisation = this.organisation;
    }
    this._jobsServiceProvider.getAll(query).subscribe((events) => {
      this.events = events;
    })
 
  }
 
  ionViewDidLoad(){
    // this.todoService.load()
    //     .subscribe(data => {
    //       this.todos = data;
    //     })
 //get all
    // this.reviewService.getReviews().subscribe(data => {
    //     this.reviews = data;
    // });

 
  }

  ionViewWillEnter() {
    let query :any ={};
    if(this.organisation){
      query.organisation = this.organisation;
    }
    this._jobsServiceProvider.getAll(query).subscribe((events) => {
      this.events = events;
    })
  }
 
  addReview(){
 
    let modal = this.modalCtrl.create(AddEvent);
 
    modal.onDidDismiss(event => {
      if(event){
        this.events.push(event);
        // this.reviewService.createReview(event);    
            this._jobsServiceProvider.create(event).subscribe((event) => {
              console.log(event);
               this.events.push(event);
            })
      }
    });
 
    modal.present();
 
  }
 
  // deleteReview(review){
 
  //   //Remove locally
  //     let index = this.reviews.indexOf(review);
 
  //     if(index > -1){
  //       this.reviews.splice(index, 1);
  //     }   
 
  //   //Remove from database
  //   this.reviewService.deleteReview(review._id);
  // }


  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }

  goToDetail(event){
    console.log('go to the detail page');
    // this.navCtrl.push(EventdetailPage);
        this.navCtrl.push(EventdetailPage, {eventId: event._id}); 


  // speakerDetail(speaker) { 
  //   this.nav.push(SpeakerDetail, {speaker: speaker}); 
  // } 

}


}
