
import { Component, ViewChild } from '@angular/core';

import { NavController, NavParams,ModalController } from 'ionic-angular';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {OrganisationdetailUserPage} from '../organisationdetailuser/organisationdetailuser';
import {AddEvent} from '../addevent/addevent';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import { EventServiceProvider } from '../../providers/eventService';
import {OrganisationdetailPage} from '../organisationdetail/organisationdetail';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { AlertController, App, FabContainer, ItemSliding, List, ToastController, LoadingController, Refresher } from 'ionic-angular';
import {OrganisationFilterPage} from '../organisation-filter/organisation-filter';
import * as _ from 'lodash';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';


/*

  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'favorite-orgs',
  templateUrl: 'favoriteorgs.html'
})
export class FavoriteOrgsPage {
//   reviews: Array<Object>;
cat: string = "all";
searching: any = false;
 searchTerm: string = '';
 searchControl: FormControl;
  public organisations: Array<any>;
    private _organisationServiceProvider: OrganisationServiceProvider;
    private _eventServiceProvider: EventServiceProvider;
    public orgLength:number;
public user:any;
    public favoriteOrgs:any=[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,

  organisationServiceProdiver: OrganisationServiceProvider,eventServiceProvider:EventServiceProvider,
  public alertCtrl: AlertController,
    public app: App,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
      this.searchControl = new FormControl();
       this._organisationServiceProvider = organisationServiceProdiver;
       this._eventServiceProvider= eventServiceProvider;
        this.load();





  }

  load(){

    this.favoriteOrgs = [];//set to null
this._organisationServiceProvider.getAll()
        .subscribe((organisations) => {
            this.organisations = organisations;
            console.log('the org when page load again is '+this.organisations);
        }); 
               //console.log('the user token is' + window.localStorage.getItem('token'));
 this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
   this.user = user;
   

   //user.registerEvents
 _.forEach(this.user.favoriteOrg,(favorg) => {
    this._organisationServiceProvider.findById(favorg.favoriteOrgId).subscribe((org) => {
        console.log(org);//o day org la org = 
        this.favoriteOrgs.push(org);//ko nen push 
        this.favoriteOrgs;//this.favorite org 
        console.log(this.favoriteOrgs);
        
        
    });//end for each
});//end find user by id

 }) 

  }
 
 ionViewWillEnter() {
   this.favoriteOrgs = [];
   this.load();
   console.log(this.favoriteOrgs);
     
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



  //  this.setFilteredItems();
  //       this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
 
  //           this.searching = false;
  //           this.setFilteredItems();
 
  //       });
this.load();
 console.log(this.favoriteOrgs);

 this.favoriteOrgs=[];//ko nen dung push 
  }

  
 onSearchInput(){
        this.searching = true;
    }
 
  
  goToDetail(organisation){
    console.log(organisation._id);
    // this.navCtrl.push(EventdetailPage);
       
        this.navCtrl.push(OrganisationdetailUserPage, {organisationId: organisation._id}); 


}
addOrganisation(){
  let modal = this.modalCtrl.create(OrganisationdetailPage);
 
    modal.onDidDismiss(organisation => {
      if(organisation){
        
        this.organisations.push(organisation);
       
        // this.reviewService.createReview(event);    
            this._organisationServiceProvider.create(organisation).subscribe((organisation) => {
             
              console.log('success'+organisation.name);
             
            },(err) => {
              console.log('the error is '+err);
            })
      }
    });
 
    modal.present();
}

//present filter
presentFilter() {
    let modal = this.modalCtrl.create(OrganisationFilterPage);
    modal.present();

    modal.onWillDismiss(() => {
        console.log('present filter');
      
    });

  }

favorite(org){
  console.log('favorit '+org.name);
   let body ={
  favoriteOrgId:org._id
 }
 let body11 = {
  participantId:userID

}

 var userID=localStorage.getItem('user_Id');

this._organisationServiceProvider.updateUserFavoriteOrg(body,userID).subscribe((user) => {
console.log('fav org');
// this.load();
this.getToast();
 
});

}

getToast(){
     let toast = this.toastCtrl.create({
    message: 'You have favorited this organisation ',
    duration: 2000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

///implement search function 
 filterItems(searchTerm){
 
        return this.organisations.filter((item) => {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }


setFilteredItems() {
 
        this.organisations = this.filterItems(this.searchTerm);
 
    }



}
