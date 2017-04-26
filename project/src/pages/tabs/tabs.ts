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

@Component({
  selector:'Tabspage',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = MyEvents;
  tab2Root: any = OrganisationsListPage;
  tab3Root: any = ProfilePage;
 tab4Root:any = AboutPage;
  constructor() {

  }
}
