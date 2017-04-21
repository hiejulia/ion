import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Http, Headers } from '@angular/http';
import { Auth } from './auth';
 
/*
  Generated class for the Events provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Events {

  constructor(public http: Http,public authService: Auth) {
    console.log('Hello Events Provider');
  }

  getEvents(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
       //headers.append('Authorization', this.authService.token);
 
      this.http.get('http://localhost:8080/api/events', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
  createEvent(event){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
       //headers.append('Authorization', this.authService.token);
 
      this.http.post('https://localhost:8080/api/events', JSON.stringify(event), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
          
        }, (err) => {
          reject(err);
          console.dir(err);
        });
 
    });
 
  }
 
  deleteEvent(id){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        //headers.append('Authorization', this.authService.token);
 
        this.http.delete('https://localhost:8080/api/events' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });    
 
    });
 
  }

}
