import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';




@Component({
  selector: 'page-organisation-filter',
  templateUrl: 'organisation-filter.html'
})
export class OrganisationFilterPage {
  
  constructor(
   
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
    
  }

}