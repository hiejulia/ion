import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Http, Response, Headers } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { contentHeaders } from '../../common/index';
import { AuthHttpProvider } from '../../auth/index';
import { Block } from './block.model';

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
  private _authHttp: AuthHttp;//check lai file 
  private _dataStore: { profile: Array<Block> };//check lai interface block

  constructor(public http: Http,authHttp: AuthHttp) {
    this._http = http;
    this._authHttp = authHttp;
    this._dataStore = { profile: [] };
    this.profile.subscribe((profile) => {
      this._dataStore.profile = profile;
    });
  }


  public getProfile() {
    this._authHttp
    .get('/api/profile', { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((user: any) => {
      this.user.next(user);
      this.profile.next(user.profile);
    });
  }

  public createProfileBlock(block) {
    let body = JSON.stringify(block);

    this._authHttp
    .post('/api/profile/blocks', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
    .subscribe((block: any) => {
      this._dataStore.profile.push(block);
      this.profile.next(this._dataStore.profile);
    }, err => console.error(err));
  }

  public updateProfileBlock(block) {
    if (!block._id) {
      this.createProfileBlock(block);
    } else {
      let body = JSON.stringify(block);

      this._authHttp
      .put(`/api/profile/blocks/${block._id}`, body, { headers: contentHeaders })
      .map((res: Response) => res.json())
      .subscribe((block: any) => {
        this.updateLocalBlock(block);
      }, err => console.error(err));
    }
  }

  private updateLocalBlock(data) {
    this._dataStore.profile.forEach((block) => {
      if (block._id === data._id) {
        block = data;
      }
    });

    this.profile.next(this._dataStore.profile);
  }


  

}
