import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders, serializeQuery } from '../common/index';
import { JobModel } from './job.model';

@Injectable()
export class JobServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
  }
//get all
  getAll(criteria) {
    let query = '';
    let str = serializeQuery(criteria);

    if (str) {
      query = `?${str}`;
    }

    return this._http
    .get(`/api/jobs${query}`, { headers: contentHeaders })
    .map((res: Response) => res.json())//get the list of jobs json
  }
//get one by id
  findById(id) {
    return this._http
    .get(`/api/jobs/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//create new 
  create(job) {
    let body = JSON.stringify(job);

    return this._authHttpProvider
    .post('/api/jobs', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
