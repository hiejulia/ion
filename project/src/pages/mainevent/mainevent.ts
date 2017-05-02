import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import {MyEvents} from '../myevents/myevents';
import { PopoverPage } from '../about-popover/about-popover';
import { AlertController } from 'ionic-angular';
import { NavController,NavParams } from 'ionic-angular';
import {TechEvents} from '../techevents/techevents';
import {EventServiceProvider} from '../../providers/eventService';
import {  LoadingController,ToastController } from 'ionic-angular';
@Component({
  selector: 'page-card-background',
  templateUrl: 'mainevent.html'
})
export class MainEventPage {
  cards = [
    {
      imageUrl: '../../assets/img/card-saopaolo.png',
      industry: 'Technology',
      subindustry: 'See all technology events'
    },
    {
      imageUrl: '../../assets/img/card-amsterdam.png',
      industry: 'Business',
      subindustry: 'See all business events'
    },
    {
      imageUrl: '../../assets/img/card-sf.png',
      industry: 'Science',
      subindustry: 'See all science events'
    },
    {
      imageUrl: '../../assets/img/card-madison.png',
      industry: 'Engineer',
      subindustry: 'See all engineer events'
    },{
      imageUrl: '../../assets/img/card-sf.png',
      industry: 'Tourism',
      subindustry: 'See all tourism events'
    },
    {
      imageUrl: '../../assets/img/card-amsterdam.png',
      industry: 'Physics',
      subindustry: 'See all physics events'
    },
    {
      imageUrl: '../../assets/img/card-sf.png',
      industry: 'Chemistry',
      subindustry: 'See all chemistry events'
    },
    {
      imageUrl: '../../assets/img/card-saopaolo.png',
      industry: 'Biomedical',
      subindustry: 'See all biomedical events'
    },
    {
      imageUrl: '../../assets/img/card-amsterdam.png',
      industry: 'Industrial',
      subindustry: 'See all industrial events'
    },
     {
      imageUrl: '../../assets/img/card-madison.png',
      industry: 'Other',
      subindustry: 'See all other events'
    }];

    industries=['Technology','Business','Science','Engineer','Tourism','Physics','Chemistry','Biomedical','Industrial','Other'];

public name:any;
public industry:any;
  constructor(public navCtrl: NavController,
  public _eventServiceProvider:EventServiceProvider,
   public params:NavParams,private toastCtrl: ToastController) {
     this._eventServiceProvider.findUserById(localStorage.getItem('user_Id')).subscribe((user) => {
          this.name = user.name;
           console.log(user);
     }) ;

    


  }

  

  goToEventsList(card) {

    console.log(card.industry + " was tapped.");
    this.navCtrl.push(TechEvents,{eventIndustry:card.industry});
    
    
  }

}