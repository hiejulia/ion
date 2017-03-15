import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup:{username?:string,password?:string} = {};
  submitted = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public userData: UserData) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  //onsignup
  onSignup(form:NgForm) {
    this.submitted = true;
    if(form.valid) {
      this.userData.signup(this.signup.username);
      this.navCtrl.push(TabsPage);
    }
  }



}
