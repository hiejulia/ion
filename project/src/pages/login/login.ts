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
      
    }
ionViewDidLoad() {
 
       
 
    }

 
   

  

    createAccount(){
      this.navCtrl.push(RegisterPage);
    }
 
}