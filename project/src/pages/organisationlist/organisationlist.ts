
import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {OrganisationdetailUserPage} from '../organisationdetailuser/organisationdetailuser';
import {AddEvent} from '../addevent/addevent';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import {OrganisationdetailPage} from '../organisationdetail/organisationdetail';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { AlertController, App, FabContainer, ItemSliding, List, ToastController, LoadingController, Refresher } from 'ionic-angular';
import {OrganisationFilterPage} from '../organisation-filter/organisation-filter';
/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'organisations-list',
  templateUrl: 'organisationlist.html'
})
export class OrganisationsListPage {
//   reviews: Array<Object>;

  public organisations: Array<any>;
    private _organisationServiceProvider: OrganisationServiceProvider;
    public orgLength:number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,

  organisationServiceProdiver: OrganisationServiceProvider,
  public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
       this._organisationServiceProvider = organisationServiceProdiver;
        this.load();


        //console.log('the user token is' + window.localStorage.getItem('token'));
 
  }

  load(){
this._organisationServiceProvider.getAll()
        .subscribe((organisations) => {
            this.organisations = organisations;
            console.log('the org when page load again is '+this.organisations);
        }); 
        

  }
 
 onViewWillEnter() {
   this.load();
     
}
  ionViewDidLoad(){
    // this.todoService.load()
    //     .subscribe(data => {
    //       this.todos = data;
    //     })
 
    // this.reviewService.getReviews().subscribe(data => {
    //     this.reviews = data;
    // });

    this._organisationServiceProvider.getAll()
        .subscribe((organisations) => {
            this.organisations = organisations;
        });
 
  }
 
  
  goToDetail(organisation){
    console.log(organisation._id);
    // this.navCtrl.push(EventdetailPage);
       
        this.navCtrl.push(OrganisationdetailUserPage, {organisationId: organisation._id}); 


}
addOrganisation(){
  let modal = this.modalCtrl.create(OrganisationdetailPage);
 
    modal.onDidDismiss(organisation => {
      if(organisation){
        
        this.organisations.push(organisation);
       
        // this.reviewService.createReview(event);    
            this._organisationServiceProvider.create(organisation).subscribe((organisation) => {
             
              console.log('success'+organisation.name);
             
            },(err) => {
              console.log('the error is '+err);
            })
      }
    });
 
    modal.present();
}

//present filter
presentFilter() {
    let modal = this.modalCtrl.create(OrganisationFilterPage);
    modal.present();

    modal.onWillDismiss(() => {
        console.log('present filter');
      
    });

  }



}
