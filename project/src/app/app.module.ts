import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { MyEvents } from '../pages/myevents/myevents';
import { TechEvents } from '../pages/techevents/techevents';
import { AddEvent } from '../pages/addevent/addevent';
import {TabsPage} from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {EventdetailPage} from '../pages/eventdetail/eventdetail';
import {RegisterPage} from '../pages/register/register';
import {GeolocationPage } from '../pages/geolocation/geolocation';

import { Events } from '../providers/events';
import { Auth } from '../providers/auth';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import {ReviewsProvider} from '../providers/reviews';

import {UsersProvider} from '../providers/users';
import {UsersListPage} from '../pages/userslist/userslist';





//import service to provider concerning with data from server call
// export const firebaseConfig= {

//     apiKey: "AIzaSyAGs8_Cm-z2y2ADPq4_Zdbod61BeYvknk0",
//     authDomain: "ion-ion-af3db.firebaseapp.com",
//     databaseURL: "https://ion-ion-af3db.firebaseio.com",
//     storageBucket: "ion-ion-af3db.appspot.com",
//     messagingSenderId: "96526836715"

// };

@NgModule({
  declarations: [
    MyApp,
    MyEvents,
    TechEvents,
    AddEvent,
    TabsPage,
    LoginPage,
    
    RegisterPage,
    UsersListPage,
    EventdetailPage,
    GeolocationPage
  ],
  imports: [
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go Back',
      iconMode: 'md',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabbarPlacement: 'bottom',
      pageTransition: 'ios',
    })
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyEvents,
    TechEvents,
    AddEvent,
    TabsPage,
    LoginPage,
    UsersListPage,
    RegisterPage,
    GeolocationPage,
    
    EventdetailPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
  
  Events,
  ReviewsProvider,
  Auth,
  UsersProvider
  
   ]
})
export class AppModule {}
