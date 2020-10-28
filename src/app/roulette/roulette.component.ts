import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToHomePage() {
    this.router.navigate(['home']);
  }

}
