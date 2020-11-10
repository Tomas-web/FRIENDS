import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';
import { RouletteComponent } from './roulette/roulette.component';
import { WaitingComponent } from './waiting-component/waiting.component';
import { LeaderWaitingComponent } from './leader-waiting/leader-waiting.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SessionComponent,
    RouletteComponent,
    WaitingComponent,
    LeaderWaitingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
