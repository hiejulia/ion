import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { EventServiceProvider } from '../../providers/eventService';
import { EventModel } from '../../providers/event.model';


@Component({
  selector: 'event-edit',
  templateUrl: 'eventedit.html'
})
export class EventEditPage {
  public event: EventModel;
  public eventId:any;
  private _eventServiceProvider: EventServiceProvider;
public orgId:any;
  title:any;
  location:any;
  description:any;
  country:any;
  office:any;
  address:any;
  isActive:any;

  numberOfParticipantsEstimated:any;
  startDate:any;
  endDate:any;
  typeOfEvent:any;
  industry:any;



  _id:any;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController, eventServiceProvider:EventServiceProvider,
  public navParams:NavParams) {
      this._eventServiceProvider = eventServiceProvider;
      this.event= new EventModel();
      var event_id;
      if(this.navParams.get('eventId').length > 1){
          this.event = new EventModel();
        event_id = this.navParams.get('eventId');
        this.eventId = event_id;
        this._eventServiceProvider.findById(event_id)
        .subscribe((event) => {
            this.orgId = event.organisation;
            console.log(event+'edit org');
            this.event= event;
            this.title = this.event.title;
            this.location = this.event.location;
            this.description = this.event.description;
            this.country = this.event.country;
            this.address = this.event.address;
            this.numberOfParticipantsEstimated= this.event.numberOfParticipantsEstimated;
            this.office = this.event.office;
            this.isActive = this.event.isActive;
            this.startDate = this.event.startDate;
            this.endDate = this.event.endDate;
            this.typeOfEvent = this.event.typeOfEvent;
            this.industry = this.event.industry;


            this._id = this.event._id; 
        });
      }
      
 
  }
 



 //edit goes here 

save(): void {
 
    let editevent = {
        title:this.title,
        location:this.location,
        description:this.description,
        country:this.country,
        address:this.address,
        numberOfParticipantsEstimated:this.numberOfParticipantsEstimated,

    
       office:this.office,
       isActive : this.isActive,
       startDate : this.startDate,
       endDate: this.endDate,
       typeOfEvent: this.typeOfEvent,
       industry :this.industry,
        _id:this._id
      
    };

    console.log(editevent);
 
    // this.viewCtrl.dismiss(event);
    // console.log(event);
    // console.log('save edited org');
 this._eventServiceProvider.updateEvent(this.orgId,this.eventId,editevent)
        .subscribe(response => {
          this.navCtrl.pop(); // go back to todo list
        });
  } 
close():void {
    this.viewCtrl.dismiss();
}


// //starts from here


//   deleteTodo() {
//     this.todoService.delete(this.todo)
//       .subscribe(response => {
//         this.todos.splice(this.index, 1); // remove the todo
//         this.nav.pop(); //go back to todo list
//       });
//   }

}








