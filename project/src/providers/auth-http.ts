import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Headers,Response,BaseRequestOptions,Request,RequestOptions,
RequestOptionsArgs,RequestMethod } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/subject/BehaviorSubject';




/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthHttp {
  
   public unauthorized: Subject<Response>;
  private _http: Http;


  constructor(public http: Http) {
      this._http = http;
    this.unauthorized = new BehaviorSubject<Response>(null);
    
  }

//request 
   private request(requestArgs: RequestOptionsArgs, additionalArgs?: RequestOptionsArgs) {
    let opts = new RequestOptions(requestArgs);

    if (additionalArgs) {
      opts = opts.merge(additionalArgs);
    }

    let req:Request = new Request(opts);

    return this._http.request(req).catch((err: any) => {
      if (err.status === 401) {
        this.unauthorized.next(err);//unauthorized 
      }

      return Observable.throw(err);
    });
  }

private getToken() {
    return localStorage.getItem('token');
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

}
