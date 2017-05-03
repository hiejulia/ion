import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';
import {OrganisationsListProfilePage} from '../organisationlistprofile/organisationlistprofile';
import {TutorialPage} from '../tutorial/tutorial';
import {AuthServiceProvider} from '../../providers/authService';
import {LoginPage} from '../login/login';
import { Dialogs } from '@ionic-native/dialogs';
import {RegisterPage} from '../register/register';
import { AlertController } from 'ionic-angular';



@Component({
  template: `
    <ion-list>
      <button ion-item (click)="listUserOrg()">Update Picture</button>
      <button ion-item (click)="changeFullName()">Change Full name</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Support</button>
      <button ion-item (click)="openTutorial()">Take Tutorial</button>
      <button ion-item (click)="logout()">Logout</button>
    </ion-list>
  `
})
export class PopoverProfilePage {
username:string;
public user:any;
public authServiceProvider:any;
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    public authServiceprovider:AuthServiceProvider,
    public dialogs: Dialogs,
    public alertCtrl: AlertController
  ) { 
    this.authServiceProvider = authServiceprovider;
  }

  listUserOrg(){
    this.navCtrl.push(OrganisationsListProfilePage);
  }
  changeFullName(){
    console.log('change full name');
    this.dialogs.prompt('Please type the new name', 'Change user name', ['Save', 'Cancel'], '').then(
  theResult => {
    if ((theResult.buttonIndex == 1) && (theResult.input1 !== '')) {
      // this.tasks.push({ title: theResult.input1, status: 'open' });
    }
  }
)
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

  openTutorial(){
    this.navCtrl.push(TutorialPage);
  }
  logout(){
console.log('log out');
    // this.userData.logout();
    localStorage.removeItem('user_Id');
     this.authServiceProvider.logout();

    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.setRoot(RegisterPage);
     


    

  }
logmeout(){
console.log('log out');
    // this.userData.logout();
    localStorage.removeItem('user_Id');
     this.authServiceProvider.logout();

    this.navCtrl.setRoot(LoginPage);
    this.navCtrl.setRoot(RegisterPage);
     
}


}