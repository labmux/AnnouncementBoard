import {Component, Inject, OnInit} from '@angular/core';
import {Announcement} from '../../models/Announcement';
import {ApiService} from '../../models/services/api.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../models/services/user.service';


@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent implements OnInit {

  // TODO @Laurent here are the variables available to you through this array of objects (view announcement model for more):
  // TODO let a of announcements = a.subject, a.dueDate, a.releaseDate, a.body, a.grade, a.id
  // accessRights: 0 = no one, 1 = teacher, 2 = student
  // announcements: Announcement[];
  user: number;
  announcements: Announcement;

  constructor(private api: ApiService, private dialog: MatDialog, private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {

    this.user = this.userService.getUser();

    // loads up past announcements on load
    this.getAnnouncements();
  }

  /**
   * Receives Announcement objects as observable
   */
  /*
  getAnnouncements(): void {
       this.api.getAnnouncements().subscribe(
           (res: Announcement[]) => {
           this.announcements = res;
       });
  }
*/

  getAnnouncements() {
    this.api.getAnnouncements().subscribe(
        (res: any) => {

          this.announcements = res.data;
          console.log(res);
        }
    );
  }
  /**
   * Updates database with new announcement updated by the teacher only
   */

  /*
  editAnnouncement(edit: string): void {
    this.api.editAnnouncement(edit);
  }
*/
  /**
   * Adds a new announcement to the database, teacher only
   */
  /*
  addAnnouncement(newAnnouncement: string): void {
    this.api.addAnnouncement(newAnnouncement);
  }
*/


  openAddAnnouncement(): void {
      const dialogRef = this.dialog.open(AddAnnouncementsContentComponent, {
          width: '550px',
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
  }

  openEditAnnouncement(): void {
      const dialogRef = this.dialog.open(EditAnnouncementComponent, {
          width: '550px',
      });

      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
      });
  }

}

/**
 * Add Anouncement Dialog
 */
@Component({
    selector: 'app-add-announcements-content',
    templateUrl: './dialogs/add-announcement-dialog.html',
})
export class AddAnnouncementsContentComponent {
    announcement: string;
    name: string;

    constructor(private dialogRef: MatDialogRef<AnnouncementsComponent>,
                @Inject(MAT_DIALOG_DATA)
                public data: any) { }

    /**
     * Adds a new announcement to the database, teacher only
     */
    addAnnouncement(name: string, announcement: string): void {

        // this.api.addAnnouncement(name, announcement);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}

/**
 * Edit Anouncement Dialog
 */
@Component({
    selector: 'app-edit-announcement-content',
    templateUrl: './dialogs/edit-announcement-dialog.html',
})
export class EditAnnouncementComponent {

    name: string;
    announcement: string;

    constructor(private dialogRef: MatDialogRef<AnnouncementsComponent>,
                private api: ApiService,
                @Inject(MAT_DIALOG_DATA) public data: any) { }

    /**
     * Updates database with new announcement updated by the teacher only
     */
    editAnnouncement(name: string, announcement: string): void {
        this.api.editAnnouncement(name, announcement);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
