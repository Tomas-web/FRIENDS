import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SessionComponent } from './session/session.component';
import { RouletteComponent } from './roulette/roulette.component';
import { WaitingComponent } from './waiting-component/waiting.component';
import { LeaderWaitingComponent } from './leader-waiting/leader-waiting.component';
import { SessionStartedComponent } from './session-started/session-started.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ResultComponent } from './result/result.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/http/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SessionComponent,
    RouletteComponent,
    WaitingComponent,
    LeaderWaitingComponent,
    SessionStartedComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
