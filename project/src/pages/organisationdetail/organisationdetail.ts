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

 public organisation: OrganisationModel;
  private _organisationServiceProvider: OrganisationServiceProvider;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,
  public organisationServiceProvider: OrganisationServiceProvider,
  public navParams:NavParams) {
 this._organisationServiceProvider = organisationServiceProvider;

 this.organisation = new OrganisationModel();
      const organisationId = this.navParams.get('organisationId');
      this._organisationServiceProvider.findById(organisationId)
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

  
  
  close(){
  
    this.navCtrl.pop();
  


  }

  editOrganisation(o){
    console.log(o);
   this.navCtrl.push(OrganisationEditPage, {organisationId: o._id}); 
  


  }

  }
 
