import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Geolocation} from '@ionic-native/geolocation';
import {Platform} from 'ionic-angular';
// import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng,
// GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as async from 'async';
import {ViewChild, ElementRef} from '@angular/core';
import {EventServiceProvider} from '../../providers/eventService';
import {EventModel} from '../../providers/event.model';


declare var google;


@Component({selector: 'page-map', templateUrl: 'geolocation.html'})
export class GeolocationPage {
  @ViewChild('map')mapElement : ElementRef;
  map : any;

  public thisEventId : any;
  public thislocation : any;
  private _eventServiceProvider : EventServiceProvider;
  public event : EventModel;

  public latt : any;
  public long : any;

  constructor(public navCtrl : NavController, public navParams : NavParams, el: ElementRef,eventServiceProvider : EventServiceProvider) {
    console.log('map hre');
    this.event = new EventModel();
    var eventId = this
      .navParams
      .get('eventID'); //we have event id here

        this.latt = this
      .navParams
      .get('lattttt'); //we have event id here

        this.long = this
      .navParams
      .get('longgggg'); //we have event id here

      console.log('constructor '+this.long);

    this.thisEventId = eventId;
    this._eventServiceProvider = eventServiceProvider;
    this
      ._eventServiceProvider
      .findById(eventId)
      .subscribe((event) => {
        this.event = event;
        this.thislocation = this.event.location; //get the location public
      });

  }
ionViewWillEnter(){
    this.latt = this
      .navParams
      .get('lattttt'); //we have event id here

        this.long = this.navParams.get('longgggg'); //we have event id here

      console.log('ion view will enter '+this.long);

}

ionViewDidLoad(){
  console.log('ionviewdidload '+this.latt);
  this.initMap();
}


initMap(){
  console.log('before fetch map' + this.latt + " " + this.long);
    let latLong1 = new google.maps.LatLng(localStorage.getItem('lat'),localStorage.getItem('long'));
    // let latLong1 = new google.maps.LatLng(this.latt, this.long);
    console.log('now fetch it ' + this.latt + " " + this.long);

    let mapOptions = {
      center: latLong1,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google
      .maps
      .Map(this.mapElement.nativeElement, mapOptions);
    console.log('done fetch map');

}







}