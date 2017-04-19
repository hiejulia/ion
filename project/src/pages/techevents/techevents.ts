import { Component } from '@angular/core';
import { NavController, NavParams,ModalController, AlertController, LoadingController } from 'ionic-angular';
// import {AuthProvider} from '../../providers/auth';
// import {LoginPage} from '../login/login';
// import {Data} from '../../providers/mockdata';
// import {EventdetailPage} from '../eventdetail/eventdetail';

import {EventdetailPage} from '../eventdetail/eventdetail';

import { Events } from '../../providers/events';
import { Auth } from '../../providers/auth';
import { LoginPage } from '../login/login';

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
  events: any;
  loading: any;


  constructor(public navCtrl: NavController,
  public eventsService: Events, public modalCtrl: ModalController, 
    public alertCtrl: AlertController, public authService: Auth, public loadingCtrl: LoadingController) {

      //subscribe from server call
      // this.techevents.subscribe((t => {
      //   this.techevents.push(t);
      // }))



  }

  ionViewDidLoad() {
    this.todoService.getTodos().then((data) => {
          this.todos = data;
    }, (err) => {
        console.log("not allowed");
    });
  }
  view(){
    this.navCtrl.push(EventdetailPage);
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

  // showLoader(){

  //   this.loading = this.loadingCtrl.create({
  //     content: 'Authenticating...'
  //   });

  //   this.loading.present();

  // }

  // logout(){

  //   this.authService.logout();
  //   this.navCtrl.setRoot(LoginPage);

  // }

  // view(){
  //   this.navCtrl.push(EventdetailPage);
  // }
addTodo(){
 
    let prompt = this.alertCtrl.create({
      title: 'Add Todo',
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
 
                    this.todoService.createTodo(todo).then((result) => {
                        this.loading.dismiss();
                        this.todos = result;
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
    this.todoService.deleteTodo(todo._id).then((result) => {
 
      this.loading.dismiss();
 
      //Remove locally
        let index = this.todos.indexOf(todo);
 
        if(index > -1){
            this.todos.splice(index, 1);
        }   
 
    }, (err) => {
      this.loading.dismiss();
        console.log("not allowed");
    });
  }
 
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
