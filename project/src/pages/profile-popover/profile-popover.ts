import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';
import {OrganisationsListProfilePage} from '../organisationlistprofile/organisationlistprofile';
import {TutorialPage} from '../tutorial/tutorial';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="listUserOrg()">Update Picture</button>
      <button ion-item>Change Username</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Support</button>
      <button ion-item (click)="openTutorial()"></button>
      <button ion-item (click)="support()">Logout</button>
    </ion-list>
  `
})
export class PopoverProfilePage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  listUserOrg(){
    this.navCtrl.push(OrganisationsListProfilePage);
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

  openTutorial(){
    this.navCtrl.push(TutorialPage);
  }
}