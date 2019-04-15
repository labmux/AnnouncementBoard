import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentsComponent } from '../assignments/assignments.component';
import {UserService} from '../../models/services/user.service';
import {NavbarComponent} from '../navbar/navbar.component';

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
  loginStatus: string;
  errorMessage: string;

  constructor(private router: Router, private userService: UserService, private nav: NavbarComponent) {
  }

  ngOnInit() {
      this.user = this.userService.getUser();

      this.updatePage();
  }

  setTeacher(): void {
      if (this.isTeacher !== true) {
          this.isTeacher = true;
          this.isStudent = false;
      }
  }

  setStudent(): void {
      if (this.isStudent !== true) {
          this.isTeacher = false;
          this.isStudent = true;
      }
  }

  login(): void {
    if (this.isTeacher)
        this.user = 1;
    else if (this.isStudent)
        this.user = 2;

    this.userService.setUser(this.user);
    this.nav.updateNavbar();

    this.updatePage();
  }

  signOut(): void {
    this.user = 0;
    this.userService.setUser(this.user);
    this.updatePage();

  }

  updatePage(): void {
      if (this.user === 1)
          this.loginStatus = 'Teacher Account';
      else if (this.user === 2)
          this.loginStatus = 'Students Account';
      else
          this.loginStatus = 'Login';
  }
}
