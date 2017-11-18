import { Component } from '@angular/core';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Array<string>;

  // Create an instance of the DataService through dependency injection
  constructor(private _dataService: DataService) {
    
    // access the data services getUsers() method
    this._dataService.getUsers()
      .subscribe(res => this.users = res);
  }
}