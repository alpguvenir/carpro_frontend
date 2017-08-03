import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Carpro} from '../components/carpro/carpro.model';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log('Data service');

  }

  getCarpros() {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.get('https://carpro.herokuapp.com/cars', options)
      .map(res => res.json());
  }

  postCarpros(carpro: Carpro) {
    const headers = new Headers({ 'Content-Type': 'application/json' })
    const options = new RequestOptions({ headers: headers });
    console.log(carpro);
    return this.http.post('https://carpro.herokuapp.com/cars', carpro, options)
      .map(res => res.json());
  }

  deleteCarpros(id: number) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.delete(('https://carpro.herokuapp.com/cars/' + id), options);
  }

}
