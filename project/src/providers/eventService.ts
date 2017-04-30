import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders, serializeQuery } from '../common/index';
import { EventModel } from './event.model';

@Injectable()
export class EventServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
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


}
