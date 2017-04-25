import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {EventdetailPage} from '../eventdetail/eventdetail';

import {AddEvent} from '../addevent/addevent';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import {OrganisationdetailPage} from '../organisationdetail/organisationdetail';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'OrganisationsList',
  templateUrl: 'organisationlist.html'
})
export class OrganisationsListPage {
//   reviews: Array<Object>;

  public organisations: Array<OrganisationModel>;
    private _organisationServiceProvider: OrganisationServiceProvider;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,

  organisationServiceProdiver: OrganisationServiceProvider) {
       this._organisationServiceProvider = organisationServiceProdiver;
        this._organisationServiceProvider.getAll()
        .subscribe((organisations) => {
            this.organisations = organisations;
        });
 
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
    console.log('go to the organisation page');
    // this.navCtrl.push(EventdetailPage);
        this.navCtrl.push(OrganisationdetailPage, {organisationId: organisation._id}); 


}
addOrganisation(){
  let modal = this.modalCtrl.create(OrganisationCreatePage);
 
    modal.onDidDismiss(organisation => {
      if(organisation){
        this.organisations.push(organisation);
        // this.reviewService.createReview(event);    
            this._organisationServiceProvider.create(organisation).subscribe((organisation) => {
               this.organisations.push(organisation);
              
              console.log(organisation);
            },(err) => {
              console.log(err);
            })
      }
    });
 
    modal.present();
}

}
