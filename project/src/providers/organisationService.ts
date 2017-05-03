import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttpProvider } from './auth-http';
import { contentHeaders } from '../common/index';
import { OrganisationModel } from './organisation.model';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class OrganisationServiceProvider {
  private _http: Http;
  private _authHttpProvider: AuthHttpProvider;

  constructor(http: Http, authHttpProvider: AuthHttpProvider,public storage: Storage) {
    this._http = http;    
    
    this._authHttpProvider = authHttpProvider;
  }
//get all organisations
  getAll():Observable<OrganisationModel[]> {
    return this._http
    .get('http://localhost:3000/api/organisations', { headers: contentHeaders })
    .map((res: Response) => <OrganisationModel[]>res.json())
  }

  //get all organisations by owner
  getOrgByOwner(id) {
    return this._http
    .get(`http://localhost:3000/api/users/${id}/organisations`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//get one
  findById(id) {

    return this._http
    .get(`http://localhost:3000/api/organisations/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

//find org by name
  findByName(name) {

    return this._http
    .get(`http://localhost:3000/api/organisations/name/${name}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
   
  }
//create new 
  create(organisation) {
       let body = JSON.stringify(organisation);

    return this._authHttpProvider
    .post('http://localhost:3000/api/organisations', body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }
//update one org

  update(organisation) {
    let body = JSON.stringify(organisation);

    return this._authHttpProvider
    .put(`http://localhost:3000/api/organisations/${organisation._id}`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }


findUserById(id) {

    return this._http
    .get(`http://localhost:3000/api/users/${id}`, { headers: contentHeaders })
    .map((res: Response) => res.json())
  }

  //  handleError(error) {
  //       console.error(error);
  //       return Observable.throw(error.json().error || 'Server error');
  //   }



//update favorite events
  updateUserFavoriteOrg(orgId,userId) {
    let body = JSON.stringify(orgId);

    return this._authHttpProvider
    .patch(`http://localhost:3000/api/users/${userId}/favoriteOrg`, body, { headers: contentHeaders })
    .map((res: Response) => res.json())//event updated dc tra ve => co the truy cap participants = event.id.participants=> list ra 
  }


}


///user_Id


