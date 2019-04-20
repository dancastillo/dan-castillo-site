import { Component, OnInit } from '@angular/core';
// import { SkillsService} from './../services/skills/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: Array<string> = [];
  error: string ='';


  constructor() { }

  ngOnInit() {
    // this.skillsService.getAllSkills()
    //   .subscribe(
    //     data => this.skills = data,
    //     error => this.error = error.statusText
    //   )
  }

}