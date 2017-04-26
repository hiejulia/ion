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
import { InAppBrowser } from '@ionic-native/in-app-browser';

import {TutorialPage} from '../pages/tutorial/tutorial';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import {AboutPage} from '../pages/about/about';
import {PopoverPage} from '../pages/about-popover/about-popover';
// import {UsersProvider} from '../providers/users';
import {UsersListPage} from '../pages/userslist/userslist';

import {OrganisationFilterPage} from '../pages/organisation-filter/organisation-filter';
import {Geolocation} from '@ionic-native/geolocation'

import {ProfilePage} from '../pages/profile/profile';
import {UserProfilePage} from '../pages/userprofile/userprofile';
import {OrganisationsListPage} from '../pages/organisationlist/organisationlist';
import {OrganisationdetailPage} from '../pages/organisationdetail/organisationdetail';
import {OrganisationCreatePage} from '../pages/organisationcreate/organisationcreate';

import {AuthHttpProvider} from '../providers/auth-http';
import {AuthServiceProvider} from '../providers/authService';
import {OrganisationServiceProvider} from '../providers/organisationService';
import {EventServiceProvider} from '../providers/eventService';
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
    TutorialPage,
    RegisterPage,
    UsersListPage,
    EventdetailPage,
    GeolocationPage,
    ProfilePage,
    UserProfilePage,
    OrganisationsListPage,
    OrganisationdetailPage,
    OrganisationCreatePage,
    AboutPage,
    PopoverPage,
    OrganisationFilterPage
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
    TutorialPage,
    LoginPage,
    UsersListPage,
    RegisterPage,
    GeolocationPage,
    ProfilePage,
    EventdetailPage,
    UserProfilePage,
    OrganisationsListPage,
    OrganisationdetailPage,
    OrganisationCreatePage,
    PopoverPage,
    AboutPage,
    OrganisationFilterPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
  
  
  // UsersProvider,
  EventServiceProvider,
  OrganisationServiceProvider,
  AuthHttpProvider,
  AuthServiceProvider,
  InAppBrowser,
  Geolocation
  
   ]
})
export class AppModule {}
