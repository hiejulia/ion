import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';
import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import {AddEvent} from '../addevent/addevent';
import { CompanyModel } from '../../providers/company.model';
import { CompanyServiceProvider } from '../../providers/companyService';

/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'OrganisationsList',
  templateUrl: 'organisationslist.html'
})
export class MyEvents {
//   reviews: Array<Object>;

  public organisations: Array<CompanyModel>;
    private _companyServiceProvider: CompanyServiceProvider;

  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth,
  companyServiceProdiver: CompanyServiceProvider) {
       this._companyServiceProvider = companyServiceProdiver;
 
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
    // console.log('go to the organisation page');
    // // this.navCtrl.push(EventdetailPage);
    //     this.navCtrl.push(EventdetailPage, {organisationId: organisation._id}); 


}
}
