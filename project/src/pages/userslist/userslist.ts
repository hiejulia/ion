import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {ReviewsProvider} from '../../providers/reviews';
import {EventdetailPage} from '../eventdetail/eventdetail';


import { UsersProvider } from '../../providers/users';

import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';

import {UserProfilePage} from '../userprofile/userprofile';

/*
  Generated class for the Myevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/




@Component({
  selector: 'userslist',
  templateUrl: 'userslist.html'
})
export class UsersListPage {
  users: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
  public authService: Auth,public usersProvider:UsersProvider) {
 
  }
 
  ionViewDidLoad(){
 
    this.usersProvider.getUsers().subscribe((data) => {
      console.log(data);
      this.users = data;
      
    });
 
  }

  goToUserProfile(u){
      console.log('go to user profile');
      this.navCtrl.push(UserProfilePage,{userId:u._id});
  }

  //follow user
  follow(user){
      console.log(user);
      alert(user);
  }
 
  
  

}
