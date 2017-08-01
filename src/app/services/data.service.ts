import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service');

  }

  getPosts() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://carpro.herokuapp.com/cars', options)
      .map(res => res.json());
  }

}
