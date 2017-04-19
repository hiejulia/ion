import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
// import { NgForm } from '@angular/forms';
// //import { UserData } from '../../providers/user-data';
// import { TabsPage } from '../tabs/tabs';
// import { AuthProvider } from '../../providers/auth';
// import {TechEvents} from '../techevents/techevents';
import {RegisterPage} from '../register/register';
import {TabsPage} from '../tabs/tabs';

import { AuthService } from '../../providers/auth-service';



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
  // email:string;
  // password:string;
  // loading:any;
private _authService: AuthService;

  private _navCtrl: NavController;
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,authService: AuthService) {
      this._authService = authService;
    this._navCtrl = navCtrl;
 
    }
ionViewDidLoad() {
 
        // this.showLoader();
 
        // //Check if already authenticated
        // this.authService.checkAuthentication().then((res) => {
        //     console.log("Already authorized");
        //     this.loading.dismiss();
        //     this.navCtrl.setRoot(TechEvents);
        // }, (err) => {
        //     console.log("Not already authorized");
        //     this.loading.dismiss();
        // });
 
    }
    signin(event, email, password) {
    event.preventDefault();

    let data = { email, password };

    this._authService
    .signin(data)
    .subscribe((user) => {
      this.navCtrl.push(TabsPage);
    }, err => console.error(err));
    this.navCtrl.push(TabsPage);
  }
 
    // login(){
 
    //     this.showLoader();
 
    //     let credentials = {
    //         email: this.email,
    //         password: this.password
    //     };
 
    //     this.authService.login(credentials).then((result) => {
    //         this.loading.dismiss();
    //         console.log(result);
    //         this.navCtrl.setRoot(TechEvents);
    //     }, (err) => {
    //         this.loading.dismiss();
    //         console.log(err);
    //     });
 
    // }
 
    // launchSignup(){
    //     this.navCtrl.push(SignupPage);
    // }
 
    // showLoader(){
 
    //     this.loading = this.loadingCtrl.create({
    //         content: 'Authenticating...'
    //     });
 
    //     this.loading.present();
 
    // }

  

    createAccount(){
      this.navCtrl.push(RegisterPage);
    }
 
}