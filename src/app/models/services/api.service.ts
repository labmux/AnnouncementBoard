import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Submission} from '../Submission';
import {Announcement} from '../Announcement';
import {Assignment} from '../Assignment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO url of php api
  url = 'http://localhost/projects/AnnouncementBoard/api';

  constructor(private http: HttpClient) { }

  /**
   * Receives the JSON Announcement object which contains
   * all the announcement card information:
   * subject, dueDate, releaseDate, body, grade
   */
  getAnnouncements(): Observable<Announcement> {
    return this.http.get<Announcement>(this.url);
  }

  getTAssignments(): Observable<Assignment> {
    return this.http.get<Assignment>(this.url + '/posts/getTAssignments');
  }

  /**
   * Receives file submitted by the student
   */
  getSubmissions(id): Observable<Submission> {
    return this.http.get<Submission>(this.url + '/posts/getSubmissions/ ' + id);
  }

  /*
  studentsAsg(id): Observable<any> {
    return this.http.post(this.url + '/posts/getTAssignments' + id , {
       // grade: grade,
          id: id
    });
  }

  */

  /**
   * Receives logged in session information
   */

  /*
  getUserLoggedIn(): Observable<any> {
        return this.http.get(this.url + 'loggedIn');
  }
*/
  /**
   * Updates grade on announcement object
   */

  /*
  setGrade(grade, id): Observable<any> {
        return this.http.post(this.url + 'assignment', {
            // grade: grade,
            // id: id
        });
  }

  */

  /**
   * Updates database with new announcement updated by the teacher only
   */

  /*
  editAnnouncement(announcement:string): void {

  }
*/
  /**
   * Adds a new announcement to the database, teacher only
   */
  /*
  addAnnouncement(announcement: string): void {

  }
*/
  /**
   * Add a submission to the database
   */
  /*
  addAssignment(): void{

  }
*/
}

/*
guards should


 */