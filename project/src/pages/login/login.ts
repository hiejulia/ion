import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { UserData } from '../../providers/user-data';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';




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
  login:{username?:string, password?:string} ={};
  submitted = false;



  constructor(public navCtrl: NavController, public navParams: NavParams,public userData:userData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if(form.valid){
      this.userData.login(this.login.username);
      this.navCtrl.push(TabsPage);
    }
  }


  onSignup() {
    this.navCtrl.push(SignupPage);
  }



}
