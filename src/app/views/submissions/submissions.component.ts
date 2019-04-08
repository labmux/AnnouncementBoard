import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Submission} from '../../models/submission';

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getSubmissions();
  }

  /**
   * Updates the grade attribute from the announcement object
   * and updates the database, teacher only
   */
  setGrade(grade, id): void {
    this.http.setGrade(grade, id).subscribe( results => {

    });
  }

  /**
   * Gets the student submissions
   */
  getSubmissions(): void {
      this.http.getSubmissions().subscribe( results => {

      });
    }

  /**
   * Submits the students assignment to the database, student only
   */
  setSubmission(): void {

  }

}
