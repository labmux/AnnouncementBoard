import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from './views/announcements/announcements.component';
import { SubmissionsComponent } from './views/submissions/submissions.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './models/services/api.service';
import { NavbarComponent } from './views/navbar/navbar.component';
import { LoginPageComponent } from './views/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    SubmissionsComponent,
    NavbarComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
