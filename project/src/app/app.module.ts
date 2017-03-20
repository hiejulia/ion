import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyEvents } from '../pages/myevents/myevents';
import { TechEvents } from '../pages/techevents/techevents';
import { AddEvent } from '../pages/addevent/addevent';
import {TabsPage} from '../pages/tabs/tabs';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { SignupPage} from '../pages/signup/signup';
import { TechEventsProvider } from '../providers/tech-events';
import { AuthProvider } from '../providers/auth';
//import service to provider concerning with data from server call


@NgModule({
  declarations: [
    MyApp,
    MyEvents,
    TechEvents,
    AddEvent,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyEvents,
    TechEvents,
    AddEvent,
    TabsPage,
    LoginPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Storage , TechEventsProvider, AuthProvider]
})
export class AppModule {}
