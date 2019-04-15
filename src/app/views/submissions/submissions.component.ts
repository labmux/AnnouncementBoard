import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Submission} from '../../models/submission';
import {ApiService} from '../../models/services/api.service';

import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import {AssignmentsComponent} from '../assignments/assignments.component';


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
  displayedColumns = ['name', 'date', 'teacher', 'subject', 'dueDate', 'grade', 'file', 'setGrade'];
  submissions = [
    {
      name: 'Jonathan Joaquim',
      date: 'Tuesday April 1st, 2018',
      grade: 22,
      assignment: {
        teacher: 'Ahad Deghani',
        subject: 'Mathematics',
        dueDate: 'Tuesday April 1st, 2018',
        file: ''
      }
    },
    {
      name: 'Jonathan Joaquim',
      date: 'Tuesday April 1st, 2018',
      grade: null,
      assignment: {
        teacher: 'Ahad Deghani',
        subject: 'Mathematics',
        dueDate: 'Tuesday April 1st, 2018',
        file: ''
      }
    },
    {
      name: 'Jonathan Joaquim',
      date: 'Tuesday April 1st, 2018',
      grade: null,
      assignment: {
        teacher: 'Ahad Deghani',
        subject: 'Mathematics',
        dueDate: 'Tuesday April 1st, 2018',
        file: ''
      }
    },
    {
      name: 'Jonathan Joaquim',
      date: 'Tuesday April 1st, 2018',
      grade: null,
      assignment: {
        teacher: 'Ahad Deghani',
        subject: 'Mathematics',
        dueDate: 'Tuesday April 1st, 2018',
        file: ''
      }
    },
    {
      name: 'Jonathan Joaquim',
      date: 'Tuesday April 1st, 2018',
      grade: null,
      assignment: {
        teacher: 'Ahad Deghani',
        subject: 'Mathematics',
        dueDate: 'Tuesday April 1st, 2018',
        file: ''
      }
    }
  ];

  constructor(private api: ApiService, public dialog: MatDialog) {
  }

  // assignments: Assignment[];
  user: number;

  ngOnInit() {
    // this.getSubmissions();
    // get user permission

    this.user = 1;
  }

  openSetGrade() {
      const dialogRef = this.dialog.open(SetGradeDialogComponent, {
          width: '550px',
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
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
  // getSubmissions(): void {
  //     this.api.getSubmissions().subscribe( results => {
  //         // this.submissionss = results;
  //     });
  //   };

  /**
   * Submits the students assignment to the database, student only
   */
  // setSubmission(): void {
  //
  // };

}

/**
 * Set Grade Dialog
 */
@Component({
    selector: 'app-set-grade',
    templateUrl: './dialogs/set-grade-dialog.component.html',
})
export class SetGradeDialogComponent {

    grade: number;

    constructor(private dialogRef: MatDialogRef<SubmissionsComponent>,
                private api: ApiService,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    /**
     * Updates the grade attribute from the announcement object
     * and updates the database, teacher only
     */
    setGrade(grade, id): void {
        // this.api.setGrade(grade, id).subscribe( results => {
        // }
    }

}

