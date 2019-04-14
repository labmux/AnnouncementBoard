import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';

import {StudentSubmitionsDialogComponent} from '../student-submitions-dialog/student-submitions-dialog.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-student-submitions',
  templateUrl: './student-submitions.component.html',
  styleUrls: ['./student-submitions.component.scss']
})
export class StudentSubmitionsComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentSubmitionsDialogComponent, {
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
