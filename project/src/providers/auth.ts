import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {
  public token:any;

  constructor(public http: Http,public storage:Storage ){
    console.log('Hello Auth Provider');
  }

  //checkAuthentication

//   checkAuthentication() {
//     return new Promise((resolve,reject) => {
//       //load token if exists 
//       this.storage.get('token')
//         .then((value) => {
//           this.token = value;
//           let headers = new Headers();
//           headers.append('Authorization',this.token);
//           this.http.get('localhost/api/auth/protected',{headers:headers})
//             .subscribe(res => {
//               resolve(res);
//             },(err) => {
//               reject(err);
//             });
//         });
//     });

//   }
//   //createAccount

//   createAccount(details){
//     return new Promise((resolve, reject) => {
//       let headers = new Headers();
//       headers.append('Content-Type','application/json');
//       this.http.post('localhost/api/auth/register',JSON.stringify(details),{headers:headers})
//                   .subscribe(res => {
//                     let data = res.json();
//                     this.token = data.token;
//                     this.storage.set('token',data.token);
//                     resolve(data);
                  
//                 },(err) => {
//                   reject(err);
//                 });
//     });
//   }

//   //login
//   login(credentials) {
//     return new Promise((resolve, reject) => {
 
//         let headers = new Headers();
//         headers.append('Content-Type', 'application/json');
 
//         this.http.post('localhost/api/auth/login', JSON.stringify(credentials), {headers: headers})
//           .subscribe(res => {
 
//             let data = res.json();
//             this.token = data.token;
//             this.storage.set('token', data.token);
//             resolve(data);
 
//             resolve(res.json());
//           }, (err) => {
//             reject(err);
//           });
 
//     });
 
//   }
//  //logout
//   logout(){
//     this.storage.set('token', '');//clear jwt token
//   }
 
}