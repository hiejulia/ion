import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../common/headers';
import { AuthHttpProvider } from './auth-http';
import { BlockModel } from './block.model';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProfileServiceProvider {
  public user: Subject<any> = new BehaviorSubject<any>({});
  public profile: Subject<Array<any>> = new BehaviorSubject<Array<any>>([]);
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;//check lai file 
  private _dataStore: { profile: Array<BlockModel> };//check lai interface block

  constructor(public http: Http,authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
    this._dataStore = { profile: [] };
    this.profile.subscribe((profile) => {
      this._dataStore.profile = profile;
    });
  }

//get the profile of the user 
  public getProfile() {
    this._authHttpProvider
    .get('/api/profile', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((user: any) => {
      this.user.next(user);
      this.profile.next(user.profile);
    });
  }
//create profile block 
  public createProfileBlock(block) {
    let body = JSON.stringify(block);

    this._authHttpProvider
    .post('/api/profile/blocks', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((block: any) => {
      this._dataStore.profile.push(block);
      this.profile.next(this._dataStore.profile);
    }, err => console.error(err));
  }
//update profile block
  public updateProfileBlock(block) {
    if (!block._id) {
      this.createProfileBlock(block);
    } else {
      let body = JSON.stringify(block);

      this._authHttpProvider
      .put(`/api/profile/blocks/${block._id}`, body, { headers: contentHeaders })
      .map((res: Response) => res.json())
      .subscribe((block: any) => {
        this.updateLocalBlock(block);
      }, err => console.error(err));
    }
  }
//update local block 
  private updateLocalBlock(data) {
    this._dataStore.profile.forEach((block) => {
      if (block._id === data._id) {
        block = data;
      }
    });

    this.profile.next(this._dataStore.profile);
  }


  

}
