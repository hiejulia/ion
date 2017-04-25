import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';


import {TabsPage} from '../tabs/tabs';

import { AuthServiceProvider } from '../../providers/authService';



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
  // role: string;
  email: string;
  password: string;
  name:string;

loading:any;
  private _authServiceProvider: AuthServiceProvider;




  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController,
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
        // role: this.role,
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
      this.navCtrl.setRoot(TabsPage);
      
    },(err) => {
      console.log('error while register');
      this.loading.dismiss();
    })
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }





}
