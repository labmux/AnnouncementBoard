import { Component } from '@angular/core';
import {MatDialog} from '@angular/material';
import {SetGradeDialogComponent} from '../set-grade-dialog/set-grade-dialog.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-set-grade',
  templateUrl: './set-grade.component.html',
  styleUrls: ['./set-grade.component.scss']
})
export class SetGradeComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SetGradeDialogComponent, {
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
