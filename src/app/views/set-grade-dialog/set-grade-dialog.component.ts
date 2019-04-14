import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../set-grade/set-grade.component';

@Component({
  selector: 'app-set-grade-dialog',
  templateUrl: './set-grade-dialog.component.html',
  styleUrls: ['./set-grade-dialog.component.scss']
})
export class SetGradeDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
