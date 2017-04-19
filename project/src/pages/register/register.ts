import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams } from 'ionic-angular';


import {TabsPage} from '../tabs/tabs';
import { Auth } from '../../providers/auth';


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
  role: string;
  email: string;
  password: string;

loading:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: Auth, public loadingCtrl: LoadingController) {
    this.loading = loadingCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){
 
    this.showLoader();
 
    let details = {
        email: this.email,
        password: this.password,
        role: this.role
    };
 
    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(TabsPage);
    }, (err) => {
        this.loading.dismiss();
    });
 
  }
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }





}
