import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PopoverPage } from '../about-popover/about-popover';
import { PopoverController } from 'ionic-angular';
import {PopoverProfilePage} from '../profile-popover/profile-popover';
import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import { MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AuthServiceProvider} from '../../providers/authService';
import { Geolocation } from '@ionic-native/geolocation';

import {OrganisationServiceProvider} from '../../providers/organisationService';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { ModalController } from 'ionic-angular';
import {OrganisationsListProfilePage} from '../organisationlistprofile/organisationlistprofile';
import {TextToSpeech} from '@ionic-native/text-to-speech';

import {RegisterEventsPage} from '../registerevents/registerevents';

import {OrganisationsListPage} from '../organisationlist/organisationlist';
import {EventServiceProvider} from '../../providers/eventService';


@Component({
  selector:'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
username:string;
MENU = {
    DEFAULT: "menu-components",
    MATERIAL: "menu-material",
    AVATAR: "menu-avatar",
  }
  public user:any;
  public checkAdmin:boolean;
private _eventServiceProvider:EventServiceProvider;
    private _organisationServiceProvider: OrganisationServiceProvider;
public regeventlength:any;
public favorglength:any;
  constructor(public geo:Geolocation,public navCtrl: NavController,public modalCtrl: ModalController,public tts:TextToSpeech,
  organisationServiceProdiver: OrganisationServiceProvider,public popoverCtrl: PopoverController,public authServiceProvider:AuthServiceProvider,
  eventServiceprovider:EventServiceProvider,
  public alertCtrl: AlertController,public menuCtrl: MenuController) {
 this._organisationServiceProvider = organisationServiceProdiver;

this._eventServiceProvider = eventServiceprovider;
 this._organisationServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
this.user = user;
console.log(this.user.name);
if(localStorage.getItem('user_Roles') === 'admin'){
  this.checkAdmin = true;
}






 })

    // this.tts.speak('hello world',(() => {
    //   console.log('ok');

    // },(err) => {
    //   console
    // })

this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
  this.regeventlength = user.registerEvents.length;
  console.log(this.regeventlength);
  this.favorglength = user.favoriteOrg.length;
})

//     geo.getCurrentPosition().then(pos => {
//   console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
// });
    
  }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverProfilePage);
    popover.present({ ev: event });
  }

  // ionicDidEnter(){
  //   this.tts.speak('hello world');
  //   console.log('speeak');
  // }

  updatePicture(){
    console.log('update picture');
  }
ionViewWillEnter() {
    this.menuCtrl.enable(true, "menu-right");
    this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
  this.regeventlength = user.registerEvents.length;
  console.log(this.regeventlength);
  this.favorglength = user.favoriteOrg.length;
})
  }

    ionViewWillLeave() {
    this.menuCtrl.enable(false, "menu-right");
  }
  changeUsername(){
    console.log('change user name');   
    let alert = this.alertCtrl.create({
      title: 'Change Username',
      buttons: [
        'Cancel'
      ]
    });
    alert.addInput({
      name: 'username',
      value: this.username,
      placeholder: 'username'
    });
    alert.addButton({
      text: 'Ok',
      handler: (data: any) => {
        // this.userData.setUsername(data.username);
        // this.getUsername();
      }
    });

    alert.present(); 
  }

  changePassword(){
    console.log('changePass');
  }

  support(){
    console.log('support');
     //this.nav.push('SupportPage');

  }



  logout(){
    console.log('log out');
    // this.userData.logout();
    localStorage.removeItem('user_Id');
     this.authServiceProvider.logout();

    this.navCtrl.setRoot(LoginPage);

  }

  getUsername() {
    // this.userData.getUsername().then((username) => {
    //   this.username = username;
    // });
  }
changeMenu(menu) {
    // Disables all other sidemenus
    Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

    // Enables then open the selected menu
    this.menuCtrl.enable(true, menu);
    this.menuCtrl.open(menu);
  }
addOrg(){
  console.log('owner add orga');
  let modal = this.modalCtrl.create(OrganisationCreatePage);
 
    modal.onDidDismiss(organisation => {
      if(organisation){
        
        //this.organisations.push(organisation);
       
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


showOwnerOrg(){
  console.log('show owner org');
   this.navCtrl.push(OrganisationsListProfilePage);
}
getRegEvents(){
  console.log('get reg eve');
  this.navCtrl.push(RegisterEventsPage);
}


getFavOrgs(){
  console.log('get fav org');
  this.navCtrl.push(OrganisationsListPage);
}

}
