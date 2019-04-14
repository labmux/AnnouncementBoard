import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../add-annoucements/add-annoucements.component';

@Component({
  selector: 'app-add-announcements-content',
  templateUrl: './add-announcements-content.component.html',
  styleUrls: ['./add-announcements-content.component.scss']
})
export class AddAnnouncementsContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
