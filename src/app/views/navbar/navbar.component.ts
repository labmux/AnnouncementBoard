import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../models/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: number;
  loginStatus: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  ngOnInit() {
      this.user = this.userService.getUser();

      if (this.user === 1)
          this.loginStatus = 'Teacher Account';
      else if (this.user === 2)
          this.loginStatus = 'Students Account';
      else
          this.loginStatus = 'Login';
      // this.user = this.route.snapshot.queryParamMap.get('user');


    // this.route.paramMap.subscribe(params => {
    //     this.user = params.get('user');
    // });
  }

  goToAnnouncements() {
      this.router.navigateByUrl('announcements/' + this.user);
  }

  goToAssignments() {
      this.router.navigateByUrl('assignments/' + this.user);
  }

  updateNavbar() {
      this.user = this.userService.getUser();

      if (this.user === 1)
          this.loginStatus = 'Teacher Account';
      else if (this.user === 2)
          this.loginStatus = 'Students Account';
      else
          this.loginStatus = 'Login';
  }

}
