import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import {SubmissionsComponent} from './views/submissions/submissions.component';

const routes: Routes = [
    {path: '', component: AnnouncementsComponent},
    {path: 'announcements', component: AnnouncementsComponent},
    {path: 'submissions', component: SubmissionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
