import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {EventdetailPage} from '../eventdetail/eventdetail';


import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import { EventServiceProvider } from '../../providers/eventService';
import { EventModel } from '../../providers/event.model';
import {AuthServiceProvider} from '../../providers/authService';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ActionSheet, ActionSheetController, Config } from 'ionic-angular';


/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'my-events',
  templateUrl: 'myevents.html'
})
export class MyEvents {
  // reviews: Array<Object>;
    public organisation: any;
    actionSheet: ActionSheet;

 public events: Array<EventModel>;
  private _eventsServiceProvider: EventServiceProvider;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
eventsServiceProvider: EventServiceProvider,public authServiceProvider:AuthServiceProvider,
 public actionSheetCtrl: ActionSheetController, public config: Config,
    public inAppBrowser: InAppBrowser) {
    this._eventsServiceProvider = eventsServiceProvider;
     let query :any ={};
    if(this.organisation){
      query.organisation = this.organisation;
    }
    this._eventsServiceProvider.getAll(query).subscribe((events) => {
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
    let query :any ={};
    if(this.organisation){
      query.organisation = this.organisation;
    }
  this._eventsServiceProvider.getAll(query).subscribe((events) => {
      this.events = events;
    })
 
  }

  ionViewWillEnter() {
    let query :any ={};
    if(this.organisation){
      query.organisation = this.organisation;
    }
    this._eventsServiceProvider.getAll(query).subscribe((events) => {
      this.events = events;
    })
  }
 
  addEvent(){
 
    let modal = this.modalCtrl.create(AddEvent);
 
    modal.onDidDismiss(event => {
      if(event){
        this.events.push(event);
        // this.reviewService.createReview(event);    
            this._eventsServiceProvider.create(event).subscribe((event) => {
              console.log(event);
              
            },(err) => {
              console.log(err);
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
 
    this.authServiceProvider.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }

  goToDetail(){
    console.log('go to the detail page');
    // this.navCtrl.push(EventdetailPage);
        this.navCtrl.push(EventdetailPage); 
        //  this.navCtrl.push(EventdetailPage, {eventId: event._id}); 


  // speakerDetail(speaker) { 
  //   this.nav.push(SpeakerDetail, {speaker: speaker}); 
  // } 

}

 goToSpeakerTwitter(event: any) {
    this.inAppBrowser.create(`https://google.com/${event}`, '_blank');
  }



// openSpeakerShare(speaker: any) {
//     let actionSheet = this.actionSheetCtrl.create({
//       title: 'Share ' + speaker.name,
//       buttons: [
//         {
//           text: 'Copy Link',
//           handler: ($event: Event) => {
//             console.log('Copy link clicked on https://twitter.com/' + speaker.twitter);
//             if ((window as any)['cordova'] && (window as any)['cordova'].plugins.clipboard) {
//               (window as any)['cordova'].plugins.clipboard.copy('https://twitter.com/' + speaker.twitter);
//             }
//           }
//         },
//         {
//           text: 'Share via ...'
//         },
//         {
//           text: 'Cancel',
//           role: 'cancel'
//         }
//       ]
//     });

//     actionSheet.present();
//   }

//   openContact(speaker: any) {
//     let mode = this.config.get('mode');

//     let actionSheet = this.actionSheetCtrl.create({
//       title: 'Contact ' + speaker.name,
//       buttons: [
//         {
//           text: `Email ( ${speaker.email} )`,
//           icon: mode !== 'ios' ? 'mail' : null,
//           handler: () => {
//             window.open('mailto:' + speaker.email);
//           }
//         },
//         {
//           text: `Call ( ${speaker.phone} )`,
//           icon: mode !== 'ios' ? 'call' : null,
//           handler: () => {
//             window.open('tel:' + speaker.phone);
//           }
//         }
//       ]
//     });

//     actionSheet.present();
//   }

}
