import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Array<string>;
  email: string = 'http://res.cloudinary.com/dancastillo/image/upload/v1511814580/email_ado8sw.png';
  linkedin: string ='http://res.cloudinary.com/dancastillo/image/upload/v1511814584/linkedin_zmog3d.png';
  github: string ='http://res.cloudinary.com/dancastillo/image/upload/v1511814583/github_ogfwrd.png';

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    
    // access the data services getUsers() method
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }
}