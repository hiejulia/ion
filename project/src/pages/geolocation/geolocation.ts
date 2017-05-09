import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform} from 'ionic-angular';
// import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as async from 'async';
import { ViewChild, ElementRef } from '@angular/core';
import { EventServiceProvider } from '../../providers/eventService';
import { EventModel } from '../../providers/event.model';

declare var google;
@Component({
  selector: 'page-map',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
public thisEventId:any;
public thislocation:any;
private _eventServiceProvider:EventServiceProvider;
public event:EventModel;

 public latt:any;
 public long:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,eventServiceProvider:EventServiceProvider) {
    console.log('map hre');
    this.event = new EventModel();
     var eventId = this.navParams.get('eventID');//we have event id here

      this.thisEventId = eventId; 
      this._eventServiceProvider= eventServiceProvider;
this._eventServiceProvider.findById(eventId).subscribe((event) => {
        this.event = event;
        this.thislocation = this.event.location;//get the location public 
});


  

}
ionViewDidLoad(){
  this._findLongLat();
}

// ionViewWillLoad(){
// this._findLongLat();
// }
  

_findLongLat(){
  //find the long and lat 

console.log('start find long lat');

 var geocoder =  new google.maps.Geocoder();
    geocoder.geocode( { 'address': 'miami, us'}, function(results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            // alert("location : " + results[0].geometry.location.lat() + " " +results[0].geometry.location.lng());
            // console.log('long and lat is '+ results[0].geometry.location.lat() + " " +results[0].geometry.location.lng()) ;
            // lattlong = {results[0].geometry.location.lat(),results[0].geometry.location.lng()};
            
            this.latt = results[0].geometry.location.lat();
            this.long = results[0].geometry.location.lng();
            let latLong1 =new google.maps.LatLng(this.latt,this.long);
            let mapOptions = {
      center:latLong1,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
           
            
  

          } else {
            // alert("Something got wrong " + status);
            console.log('something went wrong '+status);
          }
        });

        console.log('end find long lat'+this.latt);

}
_fetMap(){
  console.log('before fetch map'+this.latt+" "+this.long);
        let latLong1 =new google.maps.LatLng(this.latt,this.long);
        console.log('now fetch it '+this.latt+" "+this.long);
        
    let mapOptions = {
      center:latLong1,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
console.log('done fetch map');

}



// var create = function (req, res) {
//     async.waterfall([
//         _function1(req),
//         _function2,
//         _function3
//     ], function (error, success) {
//         if (error) { alert('Something is wrong!'); }
//         return alert('Done!');
//     });
// };

// function _function1 (req) {
//     return function (callback) {
//         var something = req.body;
//         callback (null, something);
//    }
// }

// function _function2 (something, callback) {
//     return function (callback) {
//        var somethingelse = function () { // do something here };
//        callback (err, somethingelse);
//     }
// }

// function _function3 (something, callback) {
//     return function (callback) {
//       var somethingmore = function () { // do something here };
//       callback (err, somethingmore);
//     }
// }




// setTimeout(function(){
    
//  }, 3000);

//   }
}