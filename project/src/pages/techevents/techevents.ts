import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, AlertController, LoadingController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth';
import {LoginPage} from '../login/login';
import {TechEventsProvider} from '../../providers/tech-events';



/*
  Generated class for the Techevents page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'TechEvents',
  templateUrl: 'techevents.html'
})
export class TechEvents {
  techevents: any;
  loading: any;
 

  constructor(public navCtrl: NavController, public techeventService: TechEventsProvider, public modalCtrl: ModalController, 
    public alertCtrl: AlertController, public authService: AuthProvider, public loadingCtrl: LoadingController) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TecheventsPage');
    this.techeventService.getTechEvents().then((data) => {
          this.techevents = data;
    }, (err) => {//error
        console.log("You are not allowed to get tech events");
    });
  }
//addTechEvent
/** 
  addTechEvent(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Tech Event',
      message: 'Describe your todo below:',
      inputs: [
        {
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: todo => {
 
                if(todo){
 
                    this.showLoader();
 
                    this.techeventService.createTodo(todo).then((result) => {
                        this.loading.dismiss();
                        this.techevents = result;
                        console.log("todo created");
                    }, (err) => {
                        this.loading.dismiss();
                        console.log("not allowed");
                    });
 
                }
 
 
          }
        }
      ]
    });
 
    prompt.present();
 
  }
 
  deleteTodo(todo){
 
    this.showLoader();
 
    //Remove from database
    this.techeventService.deleteTodo(todo._id).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.techevents.indexOf(todo);
 
        if(index > -1){
            this.techevents.splice(index, 1);
        }   
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
  */
 
  showLoader(){
 
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });
 
    this.loading.present();
 
  }
 
  logout(){
 
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
 
  }
 
}