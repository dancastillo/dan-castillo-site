import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  
  getUsers() {
    // return this._http.get('api/users').map(res => res.json());
  }

}