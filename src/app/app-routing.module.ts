import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RouletteComponent} from './roulette/roulette.component';
import {SessionComponent} from './session/session.component';
import {WaitingComponent} from './waiting-component/waiting.component';
import {LeaderWaitingComponent} from './leader-waiting/leader-waiting.component';
import {SessionStartedComponent} from './session-started/session-started.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'roulette',
    component: RouletteComponent,
    children: [
      {
        path: '',
        redirectTo: 'roulette',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'session',
    component: SessionComponent,
    children: [
      {
        path: ':id/waiting',
        component: WaitingComponent,
      },
      {
        path: ':id/leader',
        component: LeaderWaitingComponent,
      },
      {
        path: ':id/started',
        component: SessionStartedComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
