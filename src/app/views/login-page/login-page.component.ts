import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsComponent } from '../assignments/assignments.component';
import {UserService} from '../../models/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: string
  password: string;
  user: number;
  isStudent: boolean;
  isTeacher: boolean;
  errorMessage: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.user = 0;
  }

  setTeacher(): void {
      if (this.isTeacher !== true) {
          this.isTeacher = true;
          this.isStudent = false;

          this.user = 1;
      }
  }

  setStudent(): void {
      if (this.isStudent !== true) {
          this.isTeacher = false;
          this.isStudent = true;

          this.user = 2;
      }
  }

  login(): void {
    this.userService.setUser(this.user);
  }
}
