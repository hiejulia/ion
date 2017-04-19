import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


import { Http, Response, Headers, BaseRequestOptions, Request, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Rx';


/*
  Generated class for the AuthHttp provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthHttp {
  public unauthorized: Subject<Response>;
  private _http: Http;

  constructor(public http: Http) {
    console.log('Hello AuthHttp Provider');
    this._http = http;
    this.unauthorized = new BehaviorSubject<Response>(null);
  }

  private request(requestArgs: RequestOptionsArgs, additionalArgs?: RequestOptionsArgs) {
    let opts = new RequestOptions(requestArgs);

    if (additionalArgs) {
      opts = opts.merge(additionalArgs);
    }

    let req:Request = new Request(opts);

    return this._http.request(req).catch((err: any) => {
      if (err.status === 401) {
        this.unauthorized.next(err);
      }

      return Observable.throw(err);
    });
  }

  public get(url: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Get}, opts);
  }

  public post(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Post, body: body}, opts);
  }

  public put(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Put, body: body}, opts);
  }

  public delete(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Delete, body: body}, opts);
  }

  // rest of the HTTP methods ...

}
