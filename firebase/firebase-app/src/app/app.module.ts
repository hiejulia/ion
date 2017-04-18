import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs/ReplaySubject';

export const firebaseConfig = {
    apiKey: "AIzaSyAGs8_Cm-z2y2ADPq4_Zdbod61BeYvknk0",
    authDomain: "ion-ion-af3db.firebaseapp.com",
    databaseURL: "https://ion-ion-af3db.firebaseio.com",
    storageBucket: "ion-ion-af3db.appspot.com",
    messagingSenderId: "96526836715"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
