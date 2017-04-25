import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { contentHeaders } from '../common/headers';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class AuthServiceProvider {
  public currentUser: Subject<any>;
  private _http: Http;

  constructor(http: Http) {
    this._http = http;
    this.currentUser = new BehaviorSubject<Response>(null);
  }

  public login(user: any) {
    let body = this._serialize(user);
    let basic = btoa(`${user.email}:${user.password}`);
    let headers = new Headers(contentHeaders);
    headers.append('Authorization', `Basic ${basic}`)

    return this._http
    .post('http://localhost:3000/auth/login', body, { headers: headers })
    .map((res: Response) => res.json());
  }

//register
  public register(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('http://localhost:3000/auth/register', body, { headers: contentHeaders })
    .map((res: Response) => res.json());//return json of user
  }
//get the current user 
  public setCurrentUser(user: any) {
    this.currentUser.next(user);
  }

  private _serialize(data) {
    return JSON.stringify(data);
  }

  private _deserialize(str) {
    try {
      return JSON.parse(str);
    } catch(err) {
      console.error(err);
      return null;
    }
  }
}
