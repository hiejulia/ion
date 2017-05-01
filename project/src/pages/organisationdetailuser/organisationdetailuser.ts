import { Component,ViewChild } from '@angular/core';
import { ViewController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
import Chart from 'chart.js';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {OrganisationEditPage} from '../organisationedit/organisationedit';
import {EventdetailPage} from '../eventdetail/eventdetail';
import { LoginPage } from '../login/login';
import {AddEvent} from '../addevent/addevent';
import {GeolocationPage} from '../geolocation/geolocation';
import { OrganisationModel } from '../../providers/organisation.model';
import { OrganisationServiceProvider } from '../../providers/organisationService';
import {OrganisationCreatePage} from '../organisationcreate/organisationcreate';
import { ActionSheet, ActionSheetController, Config } from 'ionic-angular';


import {AuthServiceProvider} from '../../providers/authService';
import {AuthHttpProvider} from '../../providers/auth-http';
import { EventServiceProvider } from '../../providers/eventService';
import { EventModel } from '../../providers/event.model';
import {EventEditPage} from '../eventedit/eventedit';
/*
  Generated class for the Eventdetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organisationdetailuser',
  templateUrl: 'organisationdetail.html'
})
export class OrganisationdetailUserPage {
  @ViewChild('barCanvas') barCanvas;
  barChart: any;

  
    actionSheet: ActionSheet;
currentUser:any;
 public events: Array<EventModel>;
  private _eventsServiceProvider: EventServiceProvider;
  private _authHttpProvider;
  private _eventServiceProvider:EventServiceProvider;
  private _authServiceProvider;
public orgId;
 public organisation: OrganisationModel;
  private _organisationServiceProvider: OrganisationServiceProvider;
  constructor(public navCtrl: NavController,  public modalCtrl: ModalController,
  public organisationServiceProvider: OrganisationServiceProvider,
  public navParams:NavParams,
  public eventsServiceProvider: EventServiceProvider,
  public authServiceProvider:AuthServiceProvider,
  public authHttpProvider:AuthHttpProvider,eventServiceProvider:EventServiceProvider) {
        this._eventsServiceProvider = eventsServiceProvider;
    this._authHttpProvider= authHttpProvider;
    this._authServiceProvider = authServiceProvider;
    
 this._organisationServiceProvider = organisationServiceProvider;

 this.organisation = new OrganisationModel();
      var organisationId = this.navParams.get('organisationId');
      this.orgId = organisationId;


        this._eventsServiceProvider.getAllEventsByOrg(organisationId).subscribe((events) => {
      this.events = events;
      console.log(this.events);
    })


      this._organisationServiceProvider.findById(organisationId)
        .subscribe((organisation) => {
            this.organisation= organisation;
        })


    
  }

  // ionViewDidLoad(){
  //     // console.log('did load');
  //     // this.organisation = new CompanyModel();
  //     // const id: string = this.navParams.get('id');
  //     // this._companyServiceProvider.findById(id)
  //     //   .subscribe((organisation) => {
  //     //       this.organisation= organisation;
  //     //   })
  // }
ionViewDidLoad(){
  this.barChart = this.getBarChart();
}

// ionViewDidLoad(){
//     // this.todoService.load()
//     //     .subscribe(data => {
//     //       this.todos = data;
//     //     })
//  //get all
//     // this.reviewService.getReviews().subscribe(data => {
//     //     this.reviews = data;
//     // });
//     // let query :any ={};
//     // if(this.organisation){
//     //   query.organisation = this.organisation;
//     // }

//   this._eventsServiceProvider.getAllEventsByOrg(this.navParams.get('organisationId')).subscribe((events) => {
//       this.events = events;
//       console.log(this.events);
//     })
 
//   }
  
  ionViewDidEnter(){
     var organisationId = this.navParams.get('organisationId');
      this.orgId = organisationId;

        this._eventsServiceProvider.getAllEventsByOrg(this.orgId).subscribe((events) => {
      this.events = events;
      console.log(this.events);
    })
      this._organisationServiceProvider.findById(organisationId)
        .subscribe((organisation) => {
            this.organisation= organisation;
        })





  }
  
  close(){
  
    this.navCtrl.pop();
  


  }

  addEvent() {
    console.log('add org');
    let modal = this.modalCtrl.create(AddEvent);
 
    modal.onDidDismiss(event => {
      if(event){
        event.organisation = this.orgId;
        console.log(event);
        this.events.push(event);  
        // this.reviewService.createReview(event);    
            this._eventsServiceProvider.create(this.orgId,event).subscribe((event) => {
              console.log(event);
              
            },(err) => {
              console.log(err);
            })
      }
    });
 
    modal.present();
  }

  editOrganisation(o){
    console.log(o);
   this.navCtrl.push(OrganisationEditPage, {organisationId: o._id}); 
  


  }

  getChart(context, chartType, data, options?) {
    return new Chart(context, {
      type: chartType,
      data: data,
      options: options
    });
  }
//labels = title of event

  getBarChart() {
    let data = {
      labels: ["US","Finland", "UK", "Germany", "Sweden", "Norway", "Canada"],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3,4],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };

    let options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

    return this.getChart(this.barCanvas.nativeElement, "bar", data, options);
  }

  viewThisEvent(item) {
    this.navCtrl.push(EventdetailPage,{eventId:item._id});
  }


deleteThisEvent(event) {  
  var orgId = event.organisation;
console.log(event._id +' '+orgId);


  this._eventServiceProvider.deleteEvent(orgId, event._id).subscribe(() => {
  
    // this.events.splice(0, 1); // remove the todo
        this.navCtrl.pop(); //go back to todo list

  })
    



}


updateThisEvent(event){
  console.log('update event');
  this.navCtrl.push(EventEditPage,{eventId:event._id});

}

  }
 
