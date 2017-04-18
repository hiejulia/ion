import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
// import { NgForm } from '@angular/forms';
// import { TabsPage } from '../tabs/tabs';
// import {TechEvents} from '../techevents/techevents';
// import { AuthProvider } from '../../providers/auth';
//import { UserData } from '../../providers/user-data';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // role: string;
  // email: string;
  // password: string;

  //   loading:any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {
 
  }
 
  // register(){
 
  //   this.showLoader();
 
  //   let details = {
  //       email: this.email,
  //       password: this.password,
  //       role: this.role
  //   };
 
  //   this.authService.createAccount(details).then((result) => {
  //     this.loading.dismiss();
  //     console.log(result);
  //     this.navCtrl.setRoot(TechEvents);
  //   }, (err) => {
  //       this.loading.dismiss();
  //   });
 
  // }
 
  // showLoader(){
 
  //   this.loading = this.loadingCtrl.create({
  //     content: 'Authenticating...'
  //   });
 
  //   this.loading.present();
 
  // }
 
}