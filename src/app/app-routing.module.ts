import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubmissionsComponent} from './views/submissions/submissions.component';
import {LoginPageComponent} from './views/login-page/login-page.component';
import {AssignmentsComponent} from './views/assignments/assignments.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';

const routes: Routes = [
  {path: '', component: AnnouncementsComponent},
  {path: 'announcements', component: AnnouncementsComponent},
    {path: 'submissions', component: SubmissionsComponent},
  {path: 'assignments', component: AssignmentsComponent},
    {path: 'loginPage', component: LoginPageComponent},
  {path: 'submissions/:aid', component: SubmissionsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
