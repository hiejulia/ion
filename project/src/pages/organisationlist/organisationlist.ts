import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';
import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import {AddEvent} from '../addevent/addevent';
import { CompanyModel } from '../../providers/company.model';
import { CompanyServiceProvider } from '../../providers/companyService';
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

  public organisations: Array<CompanyModel>;
    private _companyServiceProvider: CompanyServiceProvider;

  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth,
  companyServiceProdiver: CompanyServiceProvider) {
       this._companyServiceProvider = companyServiceProdiver;
        this._companyServiceProvider.getAll()
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

    this._companyServiceProvider.getAll()
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
            this._companyServiceProvider.create(organisation).subscribe((organisation) => {
               this.organisations.push(organisation);
              
              console.log(event);
            },(err) => {
              console.log(err);
            })
      }
    });
 
    modal.present();
}

}
