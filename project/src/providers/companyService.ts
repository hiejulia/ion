import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders } from '../common/index';
import { CompanyModel } from './company.model';

@Injectable()
export class CompanyServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider) {
    this._http = http;
    this._authHttpProvider = authHttpProvider;
  }
//get all
  getAll() {
    return this._http
    .get('/api/companies', { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//get one
  findById(id) {
    return this._http
    .get(`/api/companies/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//create new 
  create(company) {
    let body = JSON.stringify(company);

    return this._authHttpProvider
    .post('/api/companies', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//update
  update(company) {
    let body = JSON.stringify(company);

    return this._authHttpProvider
    .put(`/api/companies/${company._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
}
