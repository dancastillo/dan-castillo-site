import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillsService {

  constructor(private _http: Http) { }

  getAllSkills() {
    return this._http.get('assets/images.json').map(res => res.json());
  }
}