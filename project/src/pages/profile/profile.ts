import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import { MenuController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {AuthServiceProvider} from '../../providers/authService';
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

  constructor(public navCtrl: NavController,public authServiceProvider:AuthServiceProvider,public alertCtrl: AlertController,public menuCtrl: MenuController) {

  }

  updatePicture(){
    console.log('update picture');
  }
onViewWillEnter() {
    this.menuCtrl.enable(true, "menu-right");
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

}
