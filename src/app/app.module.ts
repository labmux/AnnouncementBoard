import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AnnouncementsComponent} from './views/announcements/announcements.component';
import { SubmissionsComponent } from './views/submissions/submissions.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiService} from './models/services/api.service';
import { NavbarComponent } from './views/navbar/navbar.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

/*
    Angular Material
 */
import {
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
  MatSidenavModule,
    MatTabsModule,
  MatDividerModule,
  MatTableModule,
  MatToolbarModule,
    MatButtonToggleModule


} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AssignmentsComponent } from './views/assignments/assignments.component';
import {RegisterComponent} from './views/register/register.component';
import { AddAnnoucementsComponent } from './views/add-annoucements/add-annoucements.component';
import { AddAnnouncementsContentComponent } from './views/add-announcements-content/add-announcements-content.component';
import { SetGradeComponent } from './views/set-grade/set-grade.component';
import { SetGradeDialogComponent } from './views/set-grade-dialog/set-grade-dialog.component';
import { StudentSubmitionsComponent } from './views/student-submitions/student-submitions.component';
import { StudentSubmitionsDialogComponent } from './views/student-submitions-dialog/student-submitions-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    SubmissionsComponent,
    NavbarComponent,
    LoginPageComponent,
    AssignmentsComponent,
    LoginPageComponent,
    RegisterComponent,
    AssignmentsComponent,
    AddAnnoucementsComponent,
    AddAnnouncementsContentComponent,
    SetGradeComponent,
    SetGradeDialogComponent,
    StudentSubmitionsComponent,
    StudentSubmitionsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatBadgeModule,
    MatChipsModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatDialogModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [AssignmentsComponent, AddAnnouncementsContentComponent, SetGradeDialogComponent, StudentSubmitionsDialogComponent
  ]
})
export class AppModule { }



