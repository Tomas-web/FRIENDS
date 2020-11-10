import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-leader-waiting',
  templateUrl: './leader-waiting.component.html',
  styleUrls: ['./leader-waiting.component.scss']
})
export class LeaderWaitingComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateToSessionPage(): void {
    this.router.navigate(['session']).then();
  }

}
