import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

import {RegisterPage} from '../register/register';
import {TabsPage} from '../tabs/tabs';


import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';



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
  email: string;
    password: string;
    loading: any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,
  public authService: Auth) {
    this.loading= loadingCtrl;
      
    }
ionViewDidLoad() {
   this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(HomePage);
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
            this.navCtrl.setRoot(HomePage);
        }, (err) => {
            this.loading.dismiss();
            console.log(err);
        });

}
  

   launchSignup(){
        this.navCtrl.push(RegisterPage);
    }
 
    showLoader(){
 
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
 
        this.loading.present();
 
    }
 
}