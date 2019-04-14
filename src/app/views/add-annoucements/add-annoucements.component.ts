import { Component} from '@angular/core';

import {MatDialog} from '@angular/material';
import {AddAnnouncementsContentComponent} from '../add-announcements-content/add-announcements-content.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-add-annoucements',
  templateUrl: './add-annoucements.component.html',
  styleUrls: ['./add-annoucements.component.scss']
})
export class AddAnnoucementsComponent {
  animal: string;
  name: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddAnnouncementsContentComponent, {
      width: '550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
