import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { DataService } from './services/data.service';
import { SkillsService } from './services/skills.service';
import { SchoolsService } from './services/schools/schools.service';
import { NavbarComponent } from './navbar/navbar.component';
import { EmploymentComponent } from './employment/employment.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { JobsService } from './services/jobs/jobs.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmploymentComponent,
    SkillsComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent,
    SkillCardComponent
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