import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders, serializeQuery } from '../common/index';
import { EventModel } from './event.model';
import {Observable} from 'rxjs/Observable';
  import 'rxjs/Rx';

@Injectable()
export class EventServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
  }


  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }

//get all events
  getAll() {
    // let query = '';
    // let str = serializeQuery(criteria);

    // if (str) {
    //   query = `?${str}`;
    //}

    return this._http
    .get(`http://localhost:3000/api/events`, { headers: contentHeaders })
    .map((res: Response) => res.json())//get the list of events json
  }
//get one by id get one event by the id 
  findById(id) {
    return this._authHttpProvider
    .get(`http://localhost:3000/api/events/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }


  //get  by industry
  findByIndustry(industry) {
    return this._authHttpProvider
    .get(`http://localhost:3000/api/events/industry/${industry}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//create new 
  create(orgId,event) {
    let body = JSON.stringify(event);

    return this._authHttpProvider
    .post(`http://localhost:3000/api/organisations/${orgId}/events`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }


 // put participants 
  putParticipant(orgId,eventId) {
    let body = JSON.stringify(event);

    return this._authHttpProvider
    .put(`http://localhost:3000/api/organisations/${orgId}/events/${eventId}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//get all events of an org

getAllEventsByOrg(orgId){

  return this._authHttpProvider
    .get(`http://localhost:3000/api/organisations/${orgId}/events`, { headers: contentHeaders })
    .map((res: Response) => res.json())

}
//delete one event 
deleteEvent(orgId, eventId){

   return this._http
    .delete(`http://localhost:3000/api/organisations/${orgId}/events/${eventId}`,{ headers: contentHeaders })
    
  
}


  //edit event
// Update a todo
  // update(todo: Todo) {
  //   let url = `${this.todosUrl}/${todo._id}`;
  //   let body = JSON.stringify(todo)
  //   let headers = new Headers({'Content-Type': 'application/json'});

  //   return this.http.put(url, body, {headers: headers})
  //                   .map(() => todo) //See mdn.io/arrowfunctions
  //                   .catch(this.handleError);
  // }




updateEvent(orgId, eventId,event){
   let body = JSON.stringify(event);//event chinh la 

    return this._authHttpProvider
    .put(`http://localhost:3000/api/organisations/${orgId}/events/${eventId}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())

}
//update participants
  updateParticipants(participant,eventId) {
    let body = JSON.stringify(participant);

    return this._authHttpProvider
    .patch(`http://localhost:3000/api/events/${eventId}/participants`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())//event updated dc tra ve => co the truy cap participants = event.id.participants=> list ra 
  }

//list participants
getParticipants(eventId){
  return this._authHttpProvider
    .get(`http://localhost:3000/api/events/${eventId}/participants`, { headers: contentHeaders })
    .map((res: Response) => res.json())//get all participants 

}


//update participants
  updateUserRegisterEvents(eventId,userId) {
    let body = JSON.stringify(eventId);

    return this._authHttpProvider
    .patch(`http://localhost:3000/api/users/${userId}/registerevents`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())//event updated dc tra ve => co the truy cap participants = event.id.participants=> list ra 
  }



findUserById(userid) {
    return this._authHttpProvider
    .get(`http://localhost:3000/api/users/${userid}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }



}
