import { Injectable } from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Reviews provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reviews {

  data:any;
  users:any;
  jobs: any;



  constructor(public http: Http) {
    console.log('Hello Reviews Provider');
    this.data = null;
    this.users = null;
  }

  getReviews() {
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/companies')
        .map(res => res.json())
        .subscribe(data => {
          this.data =data;
          resolve(this.data);
        });
    });
  }


  getUsers(){
    if(this.users){
      return Promise.resolve(this.users);

    }
    //return new Promise
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/users')
        .map(res => res.json())
        .subscribe(data => {
          this.users = data;
          resolve(this.users);
        });
    });
  }


  getJobs(){
    console.log(this.jobs);
  }

//   createReview(review){
//     let headers = new Headers();
//     headers.append('Content-Type','application/json');

//     this.http.post('http://localhost:3000/api/reviews', JSON.stringify(review), {headers: headers})
//       .subscribe(res => {
//         console.log(res.json());
//       });

// }
//   deleteReview(id){
//     this.http.delete('http://localhost:3000/api/reviews/'+id).subscribe((res) => {
//       console.log(res.json());
//     });
//   }
}
