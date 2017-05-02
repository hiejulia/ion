import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import { OrganisationModel } from '../../providers/organisation.model';
import {  LoadingController,ToastController } from 'ionic-angular';

@Component({
  selector: 'OrganisationCreate',
  templateUrl: 'organisationcreate.html'
})
export class OrganisationCreatePage {
  public organisation: OrganisationModel;
  private _organisationServiceProvider: OrganisationServiceProvider;

  name:any;
  location:any;
  description:any;
  country:any;
  address:any;
  numberOfEmployees:any;
  industry:any;
 
  constructor(public viewCtrl: ViewController, organisationServiceProvider:OrganisationServiceProvider,
  private toastCtrl: ToastController) {
      this._organisationServiceProvider = organisationServiceProvider;
      this.organisation= new OrganisationModel();

      
 
  }
 


 
save(): void {
 
    let organisation = {
        name:this.name,
        location:this.location,
        description:this.description,
        country:this.country,
        address:this.address,
        numberOfEmployees:this.numberOfEmployees,
        industry:this.industry,
        owner:localStorage.getItem('user_Id')
      
    };
 
    this.viewCtrl.dismiss(organisation);
    console.log(organisation);
   let toast = this.toastCtrl.create({
    message: 'Organisation added successfully',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
    
 
  } 


  
close():void {
    this.viewCtrl.dismiss();
 

}

}








