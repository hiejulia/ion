import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions, GoogleMapsMarker, CameraPosition } from 'ionic-native';

/*
  Generated class for the Geolocation page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
  public map: GoogleMap;
  public mapRendered: Boolean = false; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.showMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeolocationPage');
  }

  showMap(){
    let location = new GoogleMapsLatLng(47.6062, -122.3321);
    this.map = new GoogleMap('map', {
      'camera': {
        'latLng': location,
        'tilt': 30,
        'zoom': 15,
        'bearing': 50
      }
    });

    this.map.on(GoogleMapsEvent.MAP_READY).subscribe(()=> {
      console.log('Map is ready!');
      this.mapRendered = true;
    });
  }
getMyLocation() {
    this.map.getMyLocation().then((location) => {
      var msg = ["I am here:\n",
        "latitude:" + location.latLng.lat,
        "longitude:" + location.latLng.lng].join("\n");

      let position: CameraPosition = {
        target: location.latLng,
        zoom: 15
      };
      this.map.moveCamera(position);    

      let markerOptions: GoogleMapsMarkerOptions = {
        'position': location.latLng,
        'title': msg
      };
      this.map.addMarker(markerOptions).then((marker: GoogleMapsMarker) => {
        marker.showInfoWindow();
      });

    });

  }

}
