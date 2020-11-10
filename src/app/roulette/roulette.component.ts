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

  goToHomePage(): void {
    this.router.navigate(['home']);
  }

  spin() {
    const roulette = document.getElementById('roulette');
    roulette.removeAttribute('style');
    const deg = 500 + Math.round(Math.random() * 500);

    const css = '-webkit-transform: rotate(' + deg + 'deg);';

    roulette.setAttribute(
      'style', css
    );
  }

}
