import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
 
@Injectable()
export class ReviewsProvider {
 
  data: any;
 
  constructor(public http: Http) {
    this.data = null;
  }
 
  getReviews():Observable<any> {
 
    // if (this.data) {
    //   return Promise.resolve(this.data);
    // }
 
    // return new Promise(resolve => {
 
    //   this.http.get('http://localhost:8080/api/reviews')
    //     .map(res => res.json())
    //     .subscribe(data => {
    //       this.data = data;
    //       resolve(Array.of(this.data));
    //     });
    // });


     
      return this.http.get('http://localhost:8080/api/reviews')
                 .map(res => res.json())
                 .catch(this.handleError);
    }
 
  
   handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
 
  createReview(review){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
 
    this.http.post('http://localhost:8080/api/reviews', JSON.stringify(review), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
 
  }
 
  deleteReview(id){
 
    this.http.delete('http://localhost:8080/api/reviews/' + id).subscribe((res) => {
      console.log(res.json());
    });    
 
  }


    getReviewById(id){
 
//  return new Promise(resolve => {
 
//       this.http.get('http://localhost:8080/api/reviews/'+id)
//         .map(res => res.json())
//         .subscribe(data => {
//           this.data = data;
//           resolve(Array.of(this.data));
//         });
//     });

  return this.http.get('http://localhost:8080/api/reviews/'+id)
                 .map(res => res.json())
                 .catch(this.handleError);
 
    

  
    }


    updateReviewById(id,nOp){
 
//  return new Promise(resolve => {
 
//       this.http.get('http://localhost:8080/api/reviews/'+id)
//         .map(res => res.json())
//         .subscribe(data => {
//           this.data = data;
//           resolve(Array.of(this.data));
//         });
//     });

  return this.http.patch('http://localhost:8080/api/reviews/'+id,nOp)
                 .map(res => res.json())
                 .catch(this.handleError);
 
    

  
    }
}