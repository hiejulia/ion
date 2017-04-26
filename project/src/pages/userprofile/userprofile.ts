import { Component } from '@angular/core';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import { AlertController } from 'ionic-angular';

import { NavController, NavParams,ModalController } from 'ionic-angular';

@Component({
  selector:'UserProfilePage',
  templateUrl: 'userprofile.html'
})
export class UserProfilePage {
user:Object;

  constructor(public navCtrl: NavController,
 public modalCtrl: ModalController,
 public params:NavParams) {


    //    //  this.review = this.params.get('review'); 
    // var userId = this.params.get('userId'); 
    //  console.log(userId);  

    // this.reviewService.getUserById(userId).subscribe((data) => {
    //   this.user = data;
    //   console.log(typeof(this.user));
    //   console.log(this.user["_id"]);
    //   console.log(this.user);

    // });

  }





}
