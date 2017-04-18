import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../providers/auth.service';

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
  private _authService: AuthService;

  constructor(public navCtrl: NavController, public navParams: NavParams,authService: AuthService) {
    this._authService = authService;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }


  signin(event, email, password) {
    event.preventDefault();

    let data = { email, password };

    this._authService
    .signin(data)
    .subscribe((user) => {
      this._authService.setCurrentUser(user);
    });
  }

}
