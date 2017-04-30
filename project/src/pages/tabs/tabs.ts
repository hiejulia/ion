import { Component } from '@angular/core';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';
import {UsersListPage} from '../userslist/userslist';
import {ProfilePage} from '../profile/profile';
import {OrganisationsListPage} from '../organisationlist/organisationlist';
import {AboutPage} from '../about/about';
import {UserProfilePage} from '../userprofile/userprofile';
import {TutorialPage} from '../tutorial/tutorial';
import {MainEventPage} from '../mainevent/mainevent';
import { NavController } from 'ionic-angular';


@Component({
  selector:'Tabspage',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  menu_is_open = false;
  tab1Root: any = MainEventPage;
  tab2Root: any = OrganisationsListPage;
  tab3Root: any = ProfilePage;
 tab4Root:any =  AboutPage ;
  constructor(public navCtrl: NavController) {

  }

    togglePopupMenu() {
    return this.menu_is_open = !this.menu_is_open;
  };

  getAllOrg(){
this.navCtrl.push(OrganisationsListPage);
  }
getAllEvents(){
  this.navCtrl.push(MainEventPage);
}

getAllRegisterEvents() {
this.navCtrl.push(MainEventPage);
}

getFavoriteOrg(){


}
goToAccount(){

  this.navCtrl.push(ProfilePage);

}


goTutorial(){
  this.navCtrl.push(TutorialPage);

}











}
