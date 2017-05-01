import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';

import {RegisterPage} from '../register/register';
import {TabsPage} from '../tabs/tabs';

import { AlertController } from 'ionic-angular';

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
  
  authServiceProvider: AuthServiceProvider,public alertCtrl: AlertController) {
    this.loading= loadingCtrl;
    this._authServiceProvider = authServiceProvider;
      
    }
// ionViewDidLoad() {
//    this.showLoader();
 
//         //Check if already authenticated
//         this.authService.checkAuthentication().then((res) => {
//             console.log("Already authorized");
//             this.loading.dismiss();
//             this.navCtrl.setRoot(TabsPage);
//         }, (err) => {
//             console.log("Not already authorized");
//             this.loading.dismiss();
//         });
 
       
 
//     }

 
   
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
                this.loading.dismiss();
                
                this._authServiceProvider.setCurrentUser(user);//set current user 
                console.log(user._id);
                localStorage.setItem('user_Id',user._id);
                console.log(localStorage.getItem('user_Id'));                
               
                this.navCtrl.setRoot(TabsPage);
            },(err) => {
                console.log('not authenticated');
                this.loading.dismiss();
                let alert = this.alertCtrl.create({
      title: 'Login failed',
      subTitle: 'Please check your email and password',
      buttons: ['OK']
    });

    alert.present();
            })

}
  

   launchSignup(){
        this.navCtrl.push(RegisterPage);//go to register page 
    }
 
    showLoader(){

        this.loading = this.loadingCtrl.create({
            
            content: 'Please wait...'
        });
 
        this.loading.present();
 
    }
 
}