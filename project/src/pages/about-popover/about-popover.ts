import { Component } from '@angular/core';

import { App, NavController, ModalController, ViewController } from 'ionic-angular';
import {TutorialPage} from '../tutorial/tutorial';
import { AlertController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="openTutorial()">Tutorial</button>
      <button ion-item (click)="close('http://ionicframework.com/docs/v2')">Documentation</button>
      <button ion-item (click)="close('http://showcase.ionicframework.com')">Showcase</button>
      <button ion-item (click)="close('https://github.com/driftyco/ionic')">GitHub Repo</button>
      <button ion-item (click)="support()">Support</button>
    </ion-list>
  `
})
export class PopoverPage {

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public app: App,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController
  ) { }

  support() {
    this.app.getRootNav().push('SupportPage');
    this.viewCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.viewCtrl.dismiss();
  }

   openTutorial(){
     this.doConfirm();
    
  }

  doConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Want to go to the tutorial page?',
      message: 'Click agree to go to Tutorial Page ?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Go',
          handler: () => {
            this.navCtrl.push(TutorialPage);
          }
        }
      ]
    });

    alert.present();
  }
}