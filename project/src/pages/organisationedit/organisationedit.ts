import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import { OrganisationModel } from '../../providers/organisation.model';


@Component({
  selector: 'OrganisationEdit',
  templateUrl: 'organisationedit.html'
})
export class OrganisationEditPage {
  public organisation: OrganisationModel;
  private _organisationServiceProvider: OrganisationServiceProvider;

  name:any;
  location:any;
  description:any;
  country:any;
  address:any;
  numberOfEmployees:any;
  _id:any;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController, organisationServiceProvider:OrganisationServiceProvider,
  public navParams:NavParams) {
      this._organisationServiceProvider = organisationServiceProvider;
      this.organisation= new OrganisationModel();
      var organisation_id;
      if(this.navParams.get('organisationId').length > 1){
          this.organisation = new OrganisationModel();
        organisation_id = this.navParams.get('organisationId');
        this._organisationServiceProvider.findById(organisation_id)
        .subscribe((organisation) => {
            console.log(organisation+'edit org');
            this.organisation= organisation;
            this.name = this.organisation.name;
            this.location = this.organisation.location;
            this.description = this.organisation.description;
            this.country = this.organisation.country;
            this.address = this.organisation.address;
            this.numberOfEmployees  = this.organisation.numberOfEmployees;
            this._id = this.organisation._id; 
        });
      }
      
 
  }
 



 //edit goes here 

save(): void {
 
    let editorganisation = {
        name:this.name,
        location:this.location,
        description:this.description,
        country:this.country,
        address:this.address,
        numberOfEmployees:this.numberOfEmployees,
        owner:localStorage.getItem('user_Id'),
        _id:this._id
      
    };

    console.log(editorganisation);
 
    // this.viewCtrl.dismiss(organisation);
    // console.log(organisation);
    // console.log('save edited org');
 this._organisationServiceProvider.update(editorganisation)
        .subscribe(response => {
          this.navCtrl.pop(); // go back to todo list
        });
  } 
close():void {
    this.viewCtrl.dismiss();
}


// //starts from here


//   deleteTodo() {
//     this.todoService.delete(this.todo)
//       .subscribe(response => {
//         this.todos.splice(this.index, 1); // remove the todo
//         this.nav.pop(); //go back to todo list
//       });
//   }

}








