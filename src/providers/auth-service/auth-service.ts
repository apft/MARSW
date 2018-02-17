import { Injectable } from '@angular/core';
//import { HttpHeaders } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/map';

//let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
let apiUrl = 'http://localhost/marsw/public/';
/*
  Generated class for the AuthService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  constructor(public http: HttpClient) {
    console.log('Hello AuthService Provider');
  }

  /* postData(credentials, type){

    return new Promise((resolve, reject) =>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+type, credentials, {headers: headers}).
      subscribe(res =>{
        resolve(res);
      }, (err) =>{
        reject(err);
      });

    });

  }

  */

  getData(page) {
  return new Promise(resolve => {
    this.http.get(apiUrl+page).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}

postData(data, page) {
  return new Promise((resolve, reject) => {
          let headers = new HttpHeaders();

    this.http.post(apiUrl+page, data, {headers: headers})
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
  });
}

login(data) {
  return new Promise((resolve, reject) => {
          let headers = new HttpHeaders();

    this.http.post(apiUrl+'login', data, {headers: headers})
  .subscribe(res => {
    resolve(res);
  }, (err) => {
    reject(err);
  });
  });
}

}