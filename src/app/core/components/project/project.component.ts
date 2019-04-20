import { Component, OnInit } from '@angular/core';
// import { ProjectsService } from './../services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projects: Array<any> = [];
  error: string = '';
  constructor() { }

  ngOnInit() {
    // this.projectsService.getProjects()
    //   .subscribe(
    //     data => this.projects = data,
    //     error => this.error = error.statusText
    //   )
  }
}