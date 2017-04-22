import { Component,NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform} from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, GoogleMapsMarkerOptions} from 'ionic-native';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html'
})
export class GeolocationPage {
    private map: GoogleMap;

  

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private geolocation: Geolocation,private platform: Platform,private _zone: NgZone) {
    this.platform.ready().then(() => this.onPlatformReady());
   


  }
  private onPlatformReady(): void {

  }

  ngAfterViewInit() {
    GoogleMap.isAvailable().then(() => {

      this.map = new GoogleMap('map_canvas');

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   () => this.onMapReady(),
      //   () => alert("Error: onMapReady")
      // );

      // this.map.on(GoogleMapsEvent.MAP_READY).subscribe(
      //   (data: any) => {
      //     alert("GoogleMap.onMapReady(): ");
      //   },
      //   () => alert("Error: GoogleMapsEvent.MAP_READY")
      // );

      this.map.one(GoogleMapsEvent.MAP_READY).then((data: any) => {
        alert("GoogleMap.onMapReady(): " + JSON.stringify(data));

        this._zone.run(() => {
          let myPosition = new GoogleMapsLatLng(38.9072, -77.0369);
          console.log("My position is", myPosition);
          this.map.animateCamera({ target: myPosition, zoom: 10 });
        });

      });
    });
  }

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