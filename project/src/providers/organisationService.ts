import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders } from '../common/index';
import { OrganisationModel } from './organisation.model';

@Injectable()
export class OrganisationServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
  }
//get all organisations
  getAll() {
    return this._http
    .get('http://localhost:3000/api/organisations', { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//get one
  findById(id) {

    return this._http
    .get(`http://localhost:3000/api/organisations/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//create new 
  create(organisation) {
       let body = JSON.stringify(organisation);

    return this._authHttpProvider
    .post('http://localhost:3000/api/organisations', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//update
  update(organisation) {
    let body = JSON.stringify(organisation);

    return this._authHttpProvider
    .put(`http://localhost:3000/api/organisations/${organisation._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
