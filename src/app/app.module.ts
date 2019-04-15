/*
    Core
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsComponent, EditAnnouncementComponent} from './views/announcements/announcements.component';
import { SubmissionsComponent } from './views/submissions/submissions.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from './views/navbar/navbar.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { StudentSubmitionsDialogComponent } from './views/assignments/assignments.component';

/*
    Services
 */
import {UserService} from './models/services/user.service';
import { ApiService} from './models/services/api.service';


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
    MatButtonToggleModule,
} from '@angular/material';

import { FlexLayoutModule} from '@angular/flex-layout';
import { AssignmentsComponent } from './views/assignments/assignments.component';
import { SetGradeDialogComponent } from './views/submissions/submissions.component';
import {AddAnnouncementsContentComponent} from './views/announcements/announcements.component';




@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsComponent,
    SubmissionsComponent,
    NavbarComponent,
    LoginPageComponent,
    AssignmentsComponent,
    LoginPageComponent,
    AssignmentsComponent,
    SetGradeDialogComponent,
    StudentSubmitionsDialogComponent,
    AddAnnouncementsContentComponent,
    EditAnnouncementComponent
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
    FormsModule
  ],
  providers: [ApiService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [AssignmentsComponent, AddAnnouncementsContentComponent,
                    EditAnnouncementComponent, SetGradeDialogComponent, StudentSubmitionsDialogComponent]
})
export class AppModule { }



