import { Component, OnInit } from '@angular/core';
import {Announcement} from '../../models/announcement';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../models/services/api.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  // TODO @Laurent here are the variables available to you through this array of objects (view announcement model for more):
  // TODO let a of announcements = a.subject, a.dueDate, a.releaseDate, a.body, a.grade, a.id
  announcements: Announcement[];

  // these two params are not final yet
  studentAccount: boolean;
  teacherAccount: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.studentAccount = false;
    this.teacherAccount = false;

    // loads up past announcements on load
    this.getAnnouncements();
  }

  /**
   * Receives Announcement objects as observable
   */
  getAnnouncements(): void {
      this.api.getAnnouncements().subscribe( results => {
          this.announcements = results;
      });
  }

  /**
  * Create new announcement in the database
  */
  addAnnouncement(): void {

  }

  /**
  /**
   * Updates database with new announcement updated by the teacher only
   */
  editAnnouncement(): void {

  }

  /**
   * Adds a new announcement to the database, teacher only
   */
  addAnnouncement(): void {

  }

}
