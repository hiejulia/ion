import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


import { Http, Response, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';
/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {
  private _http: Http;

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
    this._http = http;
  }
public signin(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('/auth/signin', body, { headers: contentHeaders })
    .map((res: Response) => res.json());
  }

  public register(user: any) {
    let body = this._serialize(user);

    return this._http
    .post('/auth/register', body, { headers: contentHeaders })
    .map((res: Response) => res.json());
  }

  private _serialize(data) {
    return JSON.stringify(data);
  }
}
