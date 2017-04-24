import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
@Injectable()
export class UsersProvider {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getUsers():Observable<any>{
 
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
 
    // return new Promise(resolve => {
 
    //   this.http.get('http://localhost:8080/api/users')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.data = data;
    //       resolve(this.data);
    //     });
    // });

    return this.http.get('http://localhost:8080/api/users')
                 .map(res => res.json())
                 .catch(this.handleError);
 

  }
 
  handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
 
}