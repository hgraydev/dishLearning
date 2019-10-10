import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SearchCourseComponent } from './components/search-course/search-course.component';
import { CategoryComponent } from './components/category/category.component';
import { RecentCourseComponent } from './components/recent-course/recent-course.component';
import { ComingCourseComponent } from './components/coming-course/coming-course.component';
import { SearchHeaderComponent } from './components/search-header/search-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    CourseComponent,
    CourseDetailsComponent,
    SearchCourseComponent,
    CategoryComponent,
    RecentCourseComponent,
    ComingCourseComponent,
    SearchHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
