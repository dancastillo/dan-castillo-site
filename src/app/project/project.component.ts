import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects: Array<any> = [];
  error: string = '';
  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.projectsService.getProjects()
      .subscribe(
        data => this.projects = data,
        error => this.error = error.statusText
      )
  }
}