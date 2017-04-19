import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {TabsPage} from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private _authService: AuthService;

  constructor(public navCtrl: NavController, public navParams: NavParams,authService: AuthService) {
    this._authService = authService;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

register(event, name, email, password) {
    event.preventDefault();

    let data = { name, email, password };

    this._authService
    .register(data)
    .subscribe((user) => {
      console.log(user);
      this.navCtrl.push(TabsPage);
    });
  }



  // register(event, name, email, password) {
  //   event.preventDefault();

  //   let data = { name, email, password };

  //   this._authService
  //   .register(data)
  //   .subscribe((user) => {
  //     console.log(user);
  //   });
  // }
}
