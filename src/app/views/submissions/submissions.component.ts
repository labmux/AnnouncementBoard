import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Submission} from '../../models/submission';
import {ApiService} from '../../models/services/api.service';
import {Announcement} from '../../models/announcement';
import {Assignment} from '../../models/assignment';

@Component({
    selector: 'app-submissions',
    templateUrl: './submissions.component.html',
    styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  // TODO @Laurent here are the variables available to you through this array of objects (view submission model for more):
  // TODO let s of submissions = s.file, s.studentName
  submissions: Submission[];

  // holds the value of the grade
  grade: string;

  constructor(private api: ApiService) { }

    // assignments: Assignment[];
    displayedColumns = ['Assignment', 'Submission deadline', 'weight'];
    assignments = [
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
            submissionStatus: 'not submitted'
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            gradeWorth: 45,
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
        },
    ];
  ngOnInit() {
      // this.getSubmissions();
  }

  /**
   * Updates the grade attribute from the announcement object
   * and updates the database, teacher only
   */
  setGrade(grade, id): void {
    this.api.setGrade(grade, id).subscribe( results => {

    });
  }

  /**
   * Gets the student submissions
   */
  getSubmissions(): void {
      this.api.getSubmissions().subscribe( results => {

      });
    }

  /**
   * Submits the students assignment to the database, student only
   */
  setSubmission(): void {

  }

}
