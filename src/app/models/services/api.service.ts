import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Submission} from '../submission';
import {Announcement} from '../announcement';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO url of php api
  url = '';

  constructor(private http: HttpClient) { }

  /**
   * Receives the JSON Announcement object which contains
   * all the announcement card information:
   * subject, dueDate, releaseDate, body, grade
   */
  getAnnouncements(): Observable<Announcement> {
      return this.http.get<Announcement>(this.url + 'announcements');
  }

  /**
   * Receives logged in session information
   */
  getUserLoggedIn(): Observable<any> {
        return this.http.get(this.url + 'loggedIn');
  }

  /**
   * Updates grade on announcement object
   */
  setGrade(grade, id): Observable<any> {
        return this.http.post(this.url + 'assignment', {
            // grade: grade,
            // id: id
        });
  }

  /**
   * Receives file submitted by the student
   */
  getSubmissions(): Observable<Submission> {
      return this.http.get<Submission>(this.url + 'submissions');
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

  /**
   * Add a submission to the database
   */
  addSubmission() {

  }

}
