import { Component,NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ViewChild, ElementRef } from '@angular/core';


declare var google: any;
@Component({
  selector: 'page-map',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
    // map: google.maps.Map;

  // @ViewChild('mapCanvas') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private geolocation: Geolocation,private platform: Platform,private _zone: NgZone) {
  //  this.map = null;
  this.platform.ready().then(() => {
    this.initializeMap();
  });

  }
 initializeMap() {
  let minZoomLevel = 3;

  // this.map = new google.maps.Map(document.getElementById('map_canvas'), {
  //   zoom: minZoomLevel,
  //   center: new google.maps.LatLng(39.833, -98.583),
//   mapTypeControl: false,
  //   streetViewControl: false,
  //   mapTypeId: google.maps.MapTypeId.ROADMAP
  // });
}

  // ngAfterViewInit() {
  //   GoogleMap.isAvailable().then(() => {

  //     this.map = new GoogleMap('map_canvas');

  //     // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
  //     //   () => this.onMapReady(),
  //     //   () => alert("Error: onMapReady")
  //     // );

  //     // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
  //     //   (data: any) => {
  //     //     alert("GoogleMap.onMapReady(): ");
  //     //   },
  //     //   () => alert("Error: GoogleMapsEvent.MAP_READY")
  //     // );

  //     this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
  //       alert("GoogleMap.onMapReady(): " + JSON.stringify(data));

  //       this._zone.run(() => {
  //         let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
  //         console.log("My position is", myPosition);
  //         this.map.animateCamera({ target: myPosition, zoom: 10 });
  //       });

  //     });
  //   });
  // }

  private onMapReady(): void {
    alert('Map ready');
    //this.map.setOptions(mapConfig);
  }
  /*
    pushPage(){
      this._navController.push(SomeImportedPage, { userId: "12345"});
    }
  */
}



/**
 * VERSION FROM CONFERENCE APP
 * import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';


declare var google: any;



export class MapPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(public confData: ConferenceData, public platform: Platform) {
  }

  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 16
        });

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
}
 */