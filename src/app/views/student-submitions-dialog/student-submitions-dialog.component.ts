import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../student-submitions/student-submitions.component';

@Component({
  selector: 'app-student-submitions-dialog',
  templateUrl: './student-submitions-dialog.component.html',
  styleUrls: ['./student-submitions-dialog.component.scss']
})
export class StudentSubmitionsDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
