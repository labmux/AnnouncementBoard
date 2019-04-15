import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../submissions/submissions.component';
import {ApiService} from '../../models/services/api.service';
import {Assignment} from "../../models/Assignment";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit {

  // @Inject(MAT_DIALOG_DATA) public data: DialogData,
  constructor(private api: ApiService) {
  }


  user: number;
  id: any;
 /* assignments = [
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      dueDate: 'Wednesday, May 22 2018',
      submissionStatus: 'not submitted',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
        'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
        'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      gradeWorth: 32
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      dueDate: 'Wednesday, May 22 2018',
      submissionStatus: 'not submitted',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
        'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
        'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      gradeWorth: 32
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      dueDate: 'Wednesday, May 22 2018',
      submissionStatus: 'not submitted',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
        'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
        'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      gradeWorth: 32
    },
    {
      teacher: 'Ahad Deghani',
      subject: 'Mathematics',
      releaseDate: 'Tuesday April 1st, 2018',
      dueDate: 'Wednesday, May 22 2018',
      submissionStatus: 'not submitted',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard ' +
        'dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ' +
        'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop ' +
        'publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      gradeWorth: 32
    }
  ]; */

  assignments: Assignment;
  ngOnInit() {
    this.user = 2;
    this.getAssignments();
  }




  getAssignments() {
    this.api.getTAssignments().subscribe(
        (res: any) => {

           this.assignments = res.data;
           // this.id = res.data.aid;
        }
    );
  }

  addAssignment(): void {
    this.api.addAssignment();
  }

}
