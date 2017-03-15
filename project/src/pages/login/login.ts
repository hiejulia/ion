import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
//import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth';




/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email:string;
  password:string;
  loading:any;

  constructor(public navCtrl: NavController, public authService: AuthProvider) {
 
    }


}
