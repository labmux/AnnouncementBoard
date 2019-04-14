import {Component, OnInit} from '@angular/core';
import {Announcement} from '../../models/announcement';
import {ApiService} from '../../models/services/api.service';

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
  user: number;

  announcements = [
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
        '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
        '            bred for hunting.'
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
        '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
        '            bred for hunting.'
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
        '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
        '            bred for hunting.'
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
        '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
        '            bred for hunting.'
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      body: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.' +
        '            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally' +
        '            bred for hunting.'
    },
  ];

  constructor(private api: ApiService) {
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
    // this.api.getAnnouncements().subscribe( results => {
    //     this.announcements = results;
    // });
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

}
