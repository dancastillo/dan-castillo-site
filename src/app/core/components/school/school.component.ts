import { Component, OnInit } from '@angular/core';
// import { SchoolsService } from '../services/schools/schools.service';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  schools: Array<any> = [];
  error: string = '';

  constructor() { }

  ngOnInit() {
    // this.schoolsService.getSchools()
    //   .subscribe(
    //     data => this.schools = data,
    //     error => this.error = error.statusText
    //   )
  }

}