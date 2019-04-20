import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkillsService {

  constructor(private http: HttpClient) { }

  getAllSkills() {
    // return this._http.get('api/skills').map(res => res.json());
  }
}