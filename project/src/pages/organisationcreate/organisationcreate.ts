import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import { OrganisationModel } from '../../providers/organisation.model';


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
 
  constructor(public viewCtrl: ViewController, organisationServiceProvider:OrganisationServiceProvider) {
      this._organisationServiceProvider = organisationServiceProvider;
      this.organisation= new OrganisationModel();
 
  }
 
 ionViewDidLoad(){
     

 }



 
save(): void {
 
    let organisation = {
        name:this.name,
        location:this.location,
        description:this.description,
        country:this.country,
        address:this.address,
        numberOfEmployees:this.numberOfEmployees
      
    };
 
    this.viewCtrl.dismiss(organisation);
 
  } 
close():void {
    this.viewCtrl.dismiss();
}

}
