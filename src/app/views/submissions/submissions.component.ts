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
  // assignments: Assignment[];

  // holds the value of the grade
  grade: string;

  constructor(private api: ApiService) { }

    // assignments: Assignment[];
    user: number;
    displayedColumns = ['Assignment', 'Submission deadline', 'weight'];
    assignments = [
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
            submissionStatus: 'not submitted',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
            'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
            'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gradeWorth: 32
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
            submissionStatus: 'not submitted',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
            'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
            'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gradeWorth: 32
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
            submissionStatus: 'not submitted',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
            'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
            'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gradeWorth: 32
        },
        {
            teacher: 'Ahad Deghani',
            subject: 'Mathematics',
            releaseDate: 'Tuesday April 1st, 2018',
            dueDate: 'Wednesday, May 22 2018',
            submissionStatus: 'not submitted',
            body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
            'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
            'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
            'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
            'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
            gradeWorth: 32
        }
    ];
  ngOnInit() {
      // this.getSubmissions();
      // get user permission

      this.user = 1;
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
