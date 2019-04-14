import {Component, OnInit} from '@angular/core';
import {Announcement} from '../../models/announcement';
import {ApiService} from '../../models/services/api.service';
import {AddAnnouncementsContentComponent} from '../add-announcements-content/add-announcements-content.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  // TODO @Laurent here are the variables available to you through this array of objects (view announcement model for more):
  // TODO let a of announcements = a.subject, a.dueDate, a.releaseDate, a.body, a.grade, a.id
  // accessRights: 0 = no one, 1 = teacher, 2 = student
  // announcements: Announcement[];

  // announcements = [
  //   {
  //     teacher: 'Ahad Deghani',
  //     subject: 'Mathematics',
  //     releaseDate: 'Tuesday April 1st, 2018',
  //     body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
  //       '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
  //       '            bred for hunting.'
  //   },
  //   {
  //     teacher: 'Ahad Deghani',
  //     subject: 'Mathematics',
  //     releaseDate: 'Tuesday April 1st, 2018',
  //     body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
  //       '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
  //       '            bred for hunting.'
  //   },
  //   {
  //     teacher: 'Ahad Deghani',
  //     subject: 'Mathematics',
  //     releaseDate: 'Tuesday April 1st, 2018',
  //     body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
  //       '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
  //       '            bred for hunting.'
  //   },
  //   {
  //     teacher: 'Ahad Deghani',
  //     subject: 'Mathematics',
  //     releaseDate: 'Tuesday April 1st, 2018',
  //     body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
  //       '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
  //       '            bred for hunting.'
  //   },
  //   {
  //     teacher: 'Ahad Deghani',
  //     subject: 'Mathematics',
  //     releaseDate: 'Tuesday April 1st, 2018',
  //     body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
  //       '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
  //       '            bred for hunting.'
  //   },
  // ];
  user: number;
  announcements: Announcement;

  constructor(private api: ApiService, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.user = 1;
    // loads up past announcements on load
    this.getAnnouncements();
  }

  /**
   * Receives Announcement objects as observable
   */
  getAnnouncements(): void {
    this.api.getAnnouncements().subscribe(
        (res => {
            this.announcements = res.data;
        })
    );
  }

  /**
   * Updates database with new announcement updated by the teacher only
   */
  editAnnouncement(edit: string): void {
    this.api.editAnnouncement(edit);
  }

  /**
   * Adds a new announcement to the database, teacher only
   */
  addAnnouncement(newAnnouncement: string): void {

    // this.api.addAnnouncement(newAnnouncement);
  }

  newAnnouncement(): void {
      const dialogRef = this.dialog.open(AddAnnouncementsContentComponent, {
          width: '550px',
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
  }
}
