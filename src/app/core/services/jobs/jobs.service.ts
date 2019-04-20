import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class JobsService {

  constructor(private http: HttpClient) { }

  getJobs() {
    // return this.http.get('api/jobs').map(res => res.json());
  }

}