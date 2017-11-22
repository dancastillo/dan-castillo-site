import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {

  constructor(private _http: Http) { }

  getProjects() {
    return this._http.get('api/projects').map(res => res.json());
  }
}
