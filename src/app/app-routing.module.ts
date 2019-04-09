import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {SubmissionsComponent} from './views/submissions/submissions.component';
import {LoginPageComponent} from './views/login-page/login-page.component';

const routes: Routes = [
    {path: 'announcements', component: AnnouncementsComponent},
    {path: 'submissions', component: SubmissionsComponent},
    {path: 'loginPage', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
