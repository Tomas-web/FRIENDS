import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RequestsService} from '../core/http/requests.service';

@Component({
  selector: 'app-roulette',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.scss']
})
export class RouletteComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private requestsService: RequestsService) { }

  ngOnInit(): void {
  }

  goToHomePage(): void {
    this.router.navigate(['home']);
  }

  spin() {
    setTimeout(() => {
      this.requestsService.getRandomRestaurant().subscribe(r => {
        console.log(r);
      });
      return this.router.navigate(['../session/FRN735/result'], {relativeTo: this.route});
    }, 2000);
    const roulette = document.getElementById('roulette');
    roulette.removeAttribute('style');
    const deg = 500 + Math.round(Math.random() * 500);

    const css = '-webkit-transform: rotate(' + deg + 'deg);';

    roulette.setAttribute(
      'style', css
    );
  }

}
