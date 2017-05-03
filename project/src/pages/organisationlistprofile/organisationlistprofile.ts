
import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EventdetailPage } from '../eventdetail/eventdetail';
import { EventServiceProvider } from '../../providers/eventService';
import { AddEvent } from '../addevent/addevent';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import { OrganisationdetailPage } from '../organisationdetail/organisationdetail';
import { OrganisationCreatePage } from '../organisationcreate/organisationcreate';
import { AlertController, App, FabContainer, ItemSliding, List, ToastController, LoadingController, Refresher } from 'ionic-angular';
import { OrganisationFilterPage } from '../organisation-filter/organisation-filter';
import {OrganisationEditPage} from '../organisationedit/organisationedit';



/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'organisations-list-profile',
  templateUrl: 'organisationlistprofile.html'
})
export class OrganisationsListProfilePage {
  //   reviews: Array<Object>;

  public organisations: Array<OrganisationModel>;
  private _organisationServiceProvider: OrganisationServiceProvider;
  private _eventServiceProvider: EventServiceProvider;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,

    organisationServiceProdiver: OrganisationServiceProvider,
    eventServiceProdiver: EventServiceProvider,
    public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this._organisationServiceProvider = organisationServiceProdiver;
    this._eventServiceProvider = eventServiceProdiver;


    //change this one
    this._organisationServiceProvider.getOrgByOwner(localStorage.getItem('user_Id'))
      .subscribe((organisations) => {
        this.organisations = organisations;
        console.log(this.organisations);
      });


    //console.log('the user token is' + window.localStorage.getItem('token'));

  }

  ionViewDidLoad() {
    // this.todoService.load()
    //     .subscribe(data => {
    //       this.todos = data;
    //     })

    // this.reviewService.getReviews().subscribe(data => {
    //     this.reviews = data;
    // });
    //change this one
    this._organisationServiceProvider.getOrgByOwner(localStorage.getItem('user_Id'))
      .subscribe((organisations) => {
        this.organisations = organisations;
        console.log(this.organisations);
      });
  }

  
  ionViewDidEnter(){
     this._organisationServiceProvider.getOrgByOwner(localStorage.getItem('user_Id'))
      .subscribe((organisations) => {
        this.organisations = organisations;
        console.log(this.organisations);
      });



  }
  goToDetail(organisation) {
    console.log(organisation._id);
    // this.navCtrl.push(EventdetailPage);

    this.navCtrl.push(OrganisationdetailPage, { organisationId: organisation._id });


  }
  addOrganisation() {
    let modal = this.modalCtrl.create(OrganisationCreatePage);

    modal.onDidDismiss(organisation => {
      if (organisation) {

        this.organisations.push(organisation);

        // this.reviewService.createReview(event);    
        this._organisationServiceProvider.create(organisation).subscribe((organisation) => {

          console.log('success' + organisation.name);

        }, (err) => {
          console.log('the error is ' + err);
        })
      }
    });

    modal.present();
  }

editOrg(org){
  this.navCtrl.push(OrganisationEditPage, {organisationId: org._id}); 

}


}
