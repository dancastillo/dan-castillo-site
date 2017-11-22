import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// services
import { DataService } from './services/data.service';
import { SkillsService } from './services/skills/skills.service';
import { SchoolsService } from './services/schools/schools.service';
import { JobsService } from './services/jobs/jobs.service';
import { ProjectsService } from './services/projects/projects.service';

// components
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { ContactComponent } from './contact/contact.component';
import { SchoolComponent } from './school/school.component';
import { JobComponent } from './job/job.component';
import { ProjectComponent } from './project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    ContactComponent,
    SkillCardComponent,
    SchoolComponent,
    JobComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ 
    DataService,
    SkillsService,
    SchoolsService,
    JobsService,
    ProjectsService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }