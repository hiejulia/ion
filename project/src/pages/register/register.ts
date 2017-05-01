import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';


import {TabsPage} from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/authService';
import { AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';

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
  roles: Array<String>;
  email: string;
  password: string;
  name:string;

loading:any;
  private _authServiceProvider: AuthServiceProvider;




  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController,
  authServiceProvider:AuthServiceProvider) {
    this.loading = loadingCtrl;
    this._authServiceProvider = authServiceProvider;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
 
    this.showLoader();
 
    let credentials = {
        email: this.email,
        password: this.password,
        roles: this.roles,
        name:this.name
    };
 
    // this.authService.createAccount(details).then((result) => {
    //   this.loading.dismiss();
    //   console.log(result);
    //   this.navCtrl.setRoot(TabsPage);
    // }, (err) => {
    //     this.loading.dismiss();
    // });

    this._authServiceProvider
    .register(credentials)
    .subscribe((user) => {
      this.loading.dismiss();
      console.log('the registered user is / the current user is '+user);
     
     
      localStorage.setItem('user_Id',user._id);
       localStorage.setItem('user_Roles',user.roles);
                console.log(localStorage.getItem('user_Id'));                
               
      this._authServiceProvider.setCurrentUser(user);

      this.navCtrl.setRoot(TabsPage);
      
    },(err) => {
      console.log('error while register');
      this.loading.dismiss();
      let alert = this.alertCtrl.create({
      title: 'Register failed',
      subTitle: 'Please check your email, name ,role, and password again',
      buttons: ['OK']
    });

    alert.present();
    })
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
 
    this.loading.present();
 
  }

login(){
  this.navCtrl.push(LoginPage);
}



}
