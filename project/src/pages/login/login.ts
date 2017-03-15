import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
//import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';
import { AuthProvider } from '../../providers/auth';
import {TechEvents} from '../techevents/techevents';




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

  constructor(public navCtrl: NavController, public authService: AuthProvider,public loadingCtrl: LoadingController) {
 
    }
ionViewDidLoad() {
 
        this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(TechEvents);
        }, (err) => {
            console.log("Not already authorized");
            this.loading.dismiss();
        });
 
    }
 
    login(){
 
        this.showLoader();
 
        let credentials = {
            email: this.email,
            password: this.password
        };
 
        this.authService.login(credentials).then((result) => {
            this.loading.dismiss();
            console.log(result);
            this.navCtrl.setRoot(TechEvents);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });
 
    }
 
    launchSignup(){
        this.navCtrl.push(SignupPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }
 
}