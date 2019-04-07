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

  announcements: Announcement[];
  studentAccount: boolean;
  teacherAccount: boolean;
  submission: any;

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
