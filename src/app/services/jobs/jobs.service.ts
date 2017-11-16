import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobsService {

  constructor(private _http: Http) { }

  getJobs() {
    return this._http.get('api/jobs').map(res => res.json());
  }

}