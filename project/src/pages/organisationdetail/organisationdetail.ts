import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { CompanyModel } from '../../providers/company.model';
import { CompanyServiceProvider } from '../../providers/companyService';

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

 public organisation: CompanyModel;
  private _companyServiceProvider: CompanyServiceProvider;
  constructor(public navCtrl: NavController, public reviewService: ReviewsProvider, public modalCtrl: ModalController,
  public authService: Auth, public params:NavParams,companyServiceProvider: CompanyServiceProvider,
  public navParams:NavParams) {
 this._companyServiceProvider = companyServiceProvider;

 this.organisation = new CompanyModel();
      const organisationId = this.navParams.get('organisationId');
      this._companyServiceProvider.findById(organisationId)
        .subscribe((organisation) => {
            this.organisation= organisation;
        })
    
  }

  ionViewDidLoad(){
      // console.log('did load');
      // this.organisation = new CompanyModel();
      // const id: string = this.navParams.get('id');
      // this._companyServiceProvider.findById(id)
      //   .subscribe((organisation) => {
      //       this.organisation= organisation;
      //   })
  }

  
  
  

  }
 
