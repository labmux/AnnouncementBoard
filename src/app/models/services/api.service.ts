import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO url of php api
  url = '';

  grade: string;

  constructor(private http: HttpClient) { }

  /**
   * Receives the JSON Announcement object which contains
   * all the announcement card information:
   * subject, dueDate, releaseDate, body, grade
   * @returns {Observable<any>}
   */
  getAnnouncements(): Observable<any> {
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
  getSubmissions(): Observable<any> {
      return this.http.get(this.url + 'submission');
  }

}
