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
 
  constructor(public viewCtrl: ViewController,companyServiceProvider: CompanyServiceProvider) {
      this._organisationServiceProvider = organisationServiceProvider;
      this.organisation= new OrganisationModel();
 
  }
 
 ionViewDidLoad(){
     

 }



// onSubmit(event) {
//     event.preventDefault();

//     this._companyService
//     .create(this.company)
//     .subscribe((company) => {
//       if (company) {
//         this.goToCompany(company._id, company.slug);
//       }
//     }, err => console.error(err));
//   }

//   goToCompany(id, slug) {
//     this._router.navigate(['CompanyDetail', { id: id, slug: slug}]);
//   }
 
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
