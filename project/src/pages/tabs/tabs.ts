import { Component } from '@angular/core';

import { TechEvents } from '../techevents/techevents';
import { AddEvent } from '../addevent/addevent';
import { MyEvents } from '../myevents/myevents';
import {RegisterPage} from '../register/register';
import {EventdetailPage} from '../eventdetail/eventdetail';

@Component({
  selector:'Tabspage',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab3Root: any = TechEvents;
  tab2Root: any = EventdetailPage;
  tab1Root: any = MyEvents;

  constructor() {

  }
}
