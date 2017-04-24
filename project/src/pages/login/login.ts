import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

import {RegisterPage} from '../register/register';
import {TabsPage} from '../tabs/tabs';


import { Auth } from '../../providers/auth';

import { AuthServiceProvider } from '../../providers/authService';


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

    private _authServiceProvider: AuthServiceProvider;
  email: string;
    password: string;
    loading: any;


  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController,
  public authService: Auth,
  authServiceProvider: AuthServiceProvider) {
    this.loading= loadingCtrl;
    this._authServiceProvider = authServiceProvider;
      
    }
ionViewDidLoad() {
   this.showLoader();
 
        //Check if already authenticated
        this.authService.checkAuthentication().then((res) => {
            console.log("Already authorized");
            this.loading.dismiss();
            this.navCtrl.setRoot(TabsPage);
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
 
        // this.authService.login(credentials).then((result) => {
        //     this.loading.dismiss();
        //     console.log(result);
        //     console.log('token is'+this.authService.token);
        //     this.navCtrl.setRoot(TabsPage);
            
        // }, (err) => {
        //     this.loading.dismiss();
        //     console.log(err);
        // });
        this._authServiceProvider  
            .login(credentials)
            .subscribe((user) => {
                this._authServiceProvider.setCurrentUser(user);
            })

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