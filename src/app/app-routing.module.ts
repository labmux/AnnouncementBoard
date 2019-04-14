import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubmissionsComponent} from './views/submissions/submissions.component';
import {LoginPageComponent} from './views/login-page/login-page.component';

const routes: Routes = [
    {path: 'submissions', component: SubmissionsComponent},
    {path: 'loginPage', component: LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
