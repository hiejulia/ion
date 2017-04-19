import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { Router, RouterLink } from '@angular/router';

/*
  Generated class for the Signin page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }


  // signin(event, email, password) {
  //   event.preventDefault();

  //   let data = { email, password };

  //   this._authService
  //   .signin(data)
  //   .subscribe((user) => {
  //     this._authService.setCurrentUser(user);
  //   });
  // }

}
