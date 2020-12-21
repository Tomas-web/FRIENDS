import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../core/http/requests.service';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  showSessionCreate: boolean;
  code: string;
  incorrectCode = false;
  sending = false;

  constructor(private router: Router, private route: ActivatedRoute, private requestsService: RequestsService) {
    this.showSessionCreate = true;
  }

  ngOnInit(): void {
  }

  goToHomePage(): void {
    this.router.navigate(['home']).then();
  }

  navigateToWaiting(): void {
    this.incorrectCode = false;
    if (!!this.code && this.code !== '' && !this.sending) {
      const url = this.code + '/waiting';
      this.router.navigate([url], {relativeTo: this.route}).then();
      this.sending = true;
      this.requestsService.getCode(this.code).subscribe(r => {
        this.sending = false;
      }, err => {
        this.sending = false;
        this.incorrectCode = true;
      });
    }
  }

  navigateToLeaderWaiting(): void {
    this.sending = true;
    const url = 'FRN735/leader';
    this.router.navigate([url], {relativeTo: this.route}).then();
    if (!this.sending) {
      this.requestsService.uploadCode().subscribe(r => {
        this.sending = false;
      }, err => {
        this.sending = false;
      });
    }
  }

}
