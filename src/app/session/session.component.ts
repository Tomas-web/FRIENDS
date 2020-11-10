import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  showSessionCreate: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.showSessionCreate = true;
  }

  ngOnInit(): void {
  }

  goToHomePage() {
    this.router.navigate(['home']).then();
  }

  navigateToWaiting() {
    this.router.navigate(['1/waiting'], {relativeTo: this.route}).then();
  }

  navigateToLeaderWaiting() {
    this.router.navigate(['1/leader'], {relativeTo: this.route}).then();
  }

}
