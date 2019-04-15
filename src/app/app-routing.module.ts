import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubmissionsComponent} from './views/submissions/submissions.component';
import {LoginPageComponent} from './views/login-page/login-page.component';
import {AssignmentsComponent} from './views/assignments/assignments.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {NavbarComponent} from './views/navbar/navbar.component';

const routes: Routes = [
  {path: '', component: AnnouncementsComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'announcements/:user', component: AnnouncementsComponent},
  {path: 'submissions', component: SubmissionsComponent},
  {path: 'assignments', component: AssignmentsComponent},
  {path: 'assignments/:user', component: AssignmentsComponent},
  {path: 'loginPage', component: LoginPageComponent},
  {path: 'navbar/user', component: NavbarComponent},
  {path: 'navbar', component: AnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
