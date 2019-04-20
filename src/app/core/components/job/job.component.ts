import { Component, OnInit } from '@angular/core';
// import { JobsService } from './../services/jobs/jobs.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {

  jobs: Array<any> = [];
  error: string = '';
  description: Array<string> = [];

  constructor() { }

  ngOnInit() {
  //   this.jobsService.getJobs()
  //     .subscribe(
  //       data => this.jobs = data,
  //       error => this.error = error.statusText
  //     )
  }
}