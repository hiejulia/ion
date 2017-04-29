import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  developer = 'Hien Nguyen';

  constructor(public popoverCtrl: PopoverController,
  public alertCtrl: AlertController) { }

  presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }




}