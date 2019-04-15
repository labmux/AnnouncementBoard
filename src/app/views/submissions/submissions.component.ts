import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Submission} from '../../models/Submission';
import {ApiService} from '../../models/services/api.service';
import {Announcement} from '../../models/Announcement';
import {MatDialog} from '@angular/material';
import {AssignmentsComponent} from '../assignments/assignments.component';

export interface DialogData {
  animal: string;
  name: string;


}



@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent implements OnInit {
  // TODO @Laurent here are the variables available to you through this array of objects (view submission model for more):
  // TODO let s of submissions = s.file, s.studentName
  // assignments: Assignment[];
  @Input()id: number;

  // holds the value of the grade

  displayedColumns = ['name', 'date', 'grade', 'status', 'file', 'setGrade'];
  submissions: any[];

  constructor(private api: ApiService, public dialog: MatDialog) {
  }

    // assignments: Assignment[];
    user: number;

  ngOnInit() {
      // this.getSubmissions();
      // get user permission

    this.user = 1;
    this.getSubmissions(this.id);
  }





  /**
   * Updates the grade attribute from the announcement object
   * and updates the database, teacher only
   */
  setGrade(grade, id): void {
    // this.api.setGrade(grade, id).subscribe( results => {
    // }
  }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(AssignmentsComponent, {
  //     width: '550px',
  //     data: {name: this.name, animal: this.animal}
  //   });
  // }

  /**
   * Gets the student submissions
   */
  getSubmissions(id): void {
      this.api.getSubmissions(id).subscribe( (results: Submission) => {

        console.log(results.data);
        this.submissions = results.data;
      });
    }

  /**
   * Submits the students assignment to the database, student only
   */
  // setSubmission(): void {
  //
  // };

}

