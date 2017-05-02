
import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {EventdetailPage} from '../eventdetail/eventdetail';

import {AddEvent} from '../addevent/addevent';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import {OrganisationdetailPage} from '../organisationdetail/organisationdetail';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { AlertController, App, FabContainer, ItemSliding, List, ToastController, LoadingController, Refresher } from 'ionic-angular';
import {OrganisationFilterPage} from '../organisation-filter/organisation-filter';
import { EventModel } from '../../providers/event.model';
import { EventServiceProvider } from '../../providers/eventService';
import * as _ from 'lodash';
/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'register-events',
  templateUrl: 'registerevents.html'
})
export class RegisterEventsPage {
//   reviews: Array<Object>;
private _eventServiceProvider:EventServiceProvider;
public event:EventModel;
  public organisations: Array<OrganisationModel>;
    private _organisationServiceProvider: OrganisationServiceProvider;
    private user:any;
public events:any=[];
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
   eventServiceProvider:EventServiceProvider,

  organisationServiceProdiver: OrganisationServiceProvider,
  public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
       this._organisationServiceProvider = organisationServiceProdiver;
this._eventServiceProvider= eventServiceProvider;
this.event = new EventModel();
this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
    console.log(user.registerEvents);
    this.user = user;

//user.registerEvents
 _.forEach(this.user.registerEvents,(regevent) => {
    this._eventServiceProvider.findById(regevent.registerEvents).subscribe((event) => {
        console.log(event);
        this.events.push(event);
        console.log(this.events);
        
        
    });//end for each
});//end find user by id





})
      

 


// var results = [];
// var pendingJobCount = ids.length;

// _.forEach(ids, function(id) {
//     JobRequest.findByJobId(id, function(err, result) {
//         results.push(result);
//         if (--pendingJobCount === 0) callback(null, results);
//     });
// });



 
  }
 
  ionViewDidLoad(){
//       _.forEach(this.user.registerEvents,(regevent) => {
//     this._eventServiceProvider.findById(regevent).subscribe((event) => {
//         console.log(event);
//         this.events.push(event);
        
        
//     });//end for each
// });//end find user by id


   
  }
 
  
  


}


