import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  // TODO @Laurent this will hold an array of objects of student submissions accessible
  // TODo through these parameters: let s of submissions = s.file, s.studentName
  submissions: any;

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
