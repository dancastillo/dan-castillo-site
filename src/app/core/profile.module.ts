import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile.routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { JobComponent } from './components/job/job.component';
import { ProjectComponent } from './components/project/project.component';
import { SchoolComponent } from './components/school/school.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  declarations: [
    UserProfileComponent,
    JobComponent,
    ProjectComponent,
    SchoolComponent,
    SkillCardComponent,
    SkillsComponent
  ],
  providers: []
})
export class ProfileModule { }