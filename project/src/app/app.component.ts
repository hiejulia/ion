import { Component,ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ModalController } from 'ionic-angular';


import {TutorialPage} from '../pages/tutorial/tutorial';


@Component({
    selector: 'MyApp',

  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = LoginPage;


   public currentUser: any;
 

  constructor(platform: Platform) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      // this.navCtrl.setRoot(TutorialPage);

      
    });

     

  }







}
