import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

import { ProfileComponent } from './components/profile/profile.component';

import { CourseComponent } from './components/course/course.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';

const routes: Routes = [
  { path: '', component: CourseComponent },
  { path: 'login', component: LoginComponent },
  { path: 'recovery-password', component: RecoveryPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course', component: CourseComponent },
  { path: 'search-course', component: SearchCourseComponent }
  // { path: '', component: },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
