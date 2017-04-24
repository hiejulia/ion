import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



import { ViewController } from 'ionic-angular';
import { CompanyServiceProvider } from '../../providers/companyService';
import { CompanyModel } from '../../providers/company.model';
/*
  Generated class for the Addevent page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
// class TechEvent {
//   // title:string;
//   // description:string;
//   // place:string;

//   constructor(){}


// }





@Component({
  selector: 'OrganisationCreate',
  templateUrl: 'organisationcreate.html'
})
export class OrganisationCreate {


    public organisation: CompanyModel;
  private _companyServiceProvider: CompanyServiceProvider;

name:any;
 
  constructor(public viewCtrl: ViewController,companyServiceProvider: CompanyServiceProvider) {
      this._companyServiceProvider = companyServiceProvider;
      this.organisation= new CompanyModel();
 
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
 
save():void {
    let organisation = {
        name:this.name
    };

    this.viewCtrl.dismiss(organisation);

}  
close():void {
    this.viewCtrl.dismiss();
}

}
