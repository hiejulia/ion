import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {OrganisationEditPage} from '../organisationedit/organisationedit';

import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { ActionSheet, ActionSheetController, Config } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/eventService';

import {AuthServiceProvider} from '../../providers/authService';
import {AuthHttpProvider} from '../../providers/auth-http';

import { EventModel } from '../../providers/event.model';

/*
  Generated class for the Eventdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisationdetail',
  templateUrl: 'organisationdetail.html'
})
export class OrganisationdetailPage {

  
    actionSheet: ActionSheet;
currentUser:any;
 public events: Array<EventModel>;
  private _eventsServiceProvider: EventServiceProvider;
  private _authHttpProvider;
  private _authServiceProvider;
public orgId;
 public organisation: OrganisationModel;
  private _organisationServiceProvider: OrganisationServiceProvider;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,
  public organisationServiceProvider: OrganisationServiceProvider,
  public navParams:NavParams,
  public eventsServiceProvider: EventServiceProvider,
  public authServiceProvider:AuthServiceProvider,
  public authHttpProvider:AuthHttpProvider) {
        this._eventsServiceProvider = eventsServiceProvider;
    this._authHttpProvider= authHttpProvider;
    this._authServiceProvider = authServiceProvider;
    
 this._organisationServiceProvider = organisationServiceProvider;

 this.organisation = new OrganisationModel();
      var organisationId = this.navParams.get('organisationId');
      this.orgId = organisationId;
      this._organisationServiceProvider.findById(organisationId)
        .subscribe((organisation) => {
            this.organisation= organisation;
        })



        this._eventsServiceProvider.getAll().subscribe((events) => {
      this.events = events;
      console.log(this.events);
    })
    
  }

  // ionViewDidLoad(){
  //     // console.log('did load');
  //     // this.organisation = new CompanyModel();
  //     // const id: string = this.navParams.get('id');
  //     // this._companyServiceProvider.findById(id)
  //     //   .subscribe((organisation) => {
  //     //       this.organisation= organisation;
  //     //   })
  // }


ionViewDidLoad(){
    // this.todoService.load()
    //     .subscribe(data => {
    //       this.todos = data;
    //     })
 //get all
    // this.reviewService.getReviews().subscribe(data => {
    //     this.reviews = data;
    // });
    // let query :any ={};
    // if(this.organisation){
    //   query.organisation = this.organisation;
    // }

  this._eventsServiceProvider.getAll().subscribe((events) => {
      this.events = events;
    })
 
  }
  
  
  close(){
  
    this.navCtrl.pop();
  


  }

  addEvent() {
    console.log('add org');
    let modal = this.modalCtrl.create(AddEvent);
 
    modal.onDidDismiss(event => {
      if(event){
        event.organisation = this.orgId;
        console.log(event);
        this.events.push(event);  
        // this.reviewService.createReview(event);    
            this._eventsServiceProvider.create(this.orgId,event).subscribe((event) => {
              console.log(event);
              
            },(err) => {
              console.log(err);
            })
      }
    });
 
    modal.present();
  }

  editOrganisation(o){
    console.log(o);
   this.navCtrl.push(OrganisationEditPage, {organisationId: o._id}); 
  


  }

  }
 
