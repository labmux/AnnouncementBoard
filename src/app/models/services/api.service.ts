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
   * @returns {Observable<any>}
   */
  getAnnouncements(): Observable<Announcement> {
      return this.http.get(this.url);
  }

  /**
   * Receives logged in session information
   * @returns {Observable<any>}
   */
  getUserLoggedIn(): Observable<any> {
        return this.http.get(this.url + 'loggedIn');
  }

  /**
   * Updates grade on announcement object
   */
  setGrade(grade, id): void {

  }

  /**
   * Receives file submitted by the student
   * @returns {Observable<any>}
   */
  getSubmissions(): Observable<Submission> {
      return this.http.get(this.url + 'submission');
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
