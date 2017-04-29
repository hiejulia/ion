import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';

import { PopoverPage } from '../about-popover/about-popover';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-card-background',
  templateUrl: 'mainevent.html'
})
export class MainEventPage {
  cards = [
    {
      imageUrl: '../../assets/img/card-saopaolo.png',
      title: 'São Paulo',
      subtitle: '41 Listings'
    },
    {
      imageUrl: '../../assets/img/card-amsterdam.png',
      title: 'Amsterdam',
      subtitle: '64 Listings'
    },
    {
      imageUrl: '../../assets/img/card-sf.png',
      title: 'San Francisco',
      subtitle: '72 Listings'
    },
    {
      imageUrl: '../../assets/img/card-madison.png',
      title: 'Madison',
      subtitle: '28 Listings'
    }];

  constructor(public navCtrl: NavController) {

  }

  cardTapped(card) {
    alert(card.title + " was tapped.");
  }

}