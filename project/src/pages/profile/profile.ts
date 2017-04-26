import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';

@Component({
  selector:'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
username:string;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  updatePicture(){
    console.log('update picture');
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
    this.navCtrl.setRoot('LoginPage');

  }

  getUsername() {
    // this.userData.getUsername().then((username) => {
    //   this.username = username;
    // });
  }


}
