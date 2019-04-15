import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  showFiller = false;
  ngOnInit() {

      console.log(this.user);
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

}
