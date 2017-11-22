import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { SkillsService } from './services/skills/skills.service';
import { SchoolsService } from './services/schools/schools.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillCardComponent } from './skills/skill-card/skill-card.component';
import { JobsService } from './services/jobs/jobs.service';
import { SchoolComponent } from './school/school.component';
import { JobComponent } from './job/job.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SkillsComponent,
    PortfolioComponent,
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
    JobsService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }