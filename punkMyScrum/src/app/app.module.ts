// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatListModule
} from '@angular/material';

// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrumsComponent } from './scrums/scrums.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
