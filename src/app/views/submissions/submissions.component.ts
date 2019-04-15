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
    this.studentsAsg(this.id);
  }

  studentsAsg(id): void {
    this.api.studentsAsg(id);
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
  getSubmissions(): void {
      this.api.getSubmissions().subscribe( results => {
           this.submissions = results;
      });
    };

  /**
   * Submits the students assignment to the database, student only
   */
  // setSubmission(): void {
  //
  // };

}

