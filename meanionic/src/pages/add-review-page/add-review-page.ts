import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ViewController} from 'ionic-angular';

/*
  Generated class for the AddReviewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-review-page',
  templateUrl: 'add-review-page.html'
})
export class AddReviewPage {
  title:any;
  description:any;
  rating:any;
  author:any;
  category:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddReviewPagePage');
  }

  save():void{
    let review ={
      title:this.title,
      description:this.description,
      rating:this.rating,
      author:this.author,
      category:this.category
    };

    this.viewCtrl.dismiss(review);
  }

  close():void {
    this.viewCtrl.dismiss();
  }

}
