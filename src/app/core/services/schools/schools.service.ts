import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SchoolsService {

  constructor(private http: HttpClient) { }

  getSchools() {
    // return this._http.get('api/schools').map(res => res.json());
  }

}
