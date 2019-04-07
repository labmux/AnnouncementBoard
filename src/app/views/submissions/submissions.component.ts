import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {

  grade: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /**
   * Updates the grade attribute from the announcement object
   * and updates the database
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

}
