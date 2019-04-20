import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

const profileRoutes: Routes = [
  {
    path: '',
    component: UserProfileComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(profileRoutes)
  ],
  exports: [ RouterModule ],
  providers: [ ]
})
export class ProfileRoutingModule { }