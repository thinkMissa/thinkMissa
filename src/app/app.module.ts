import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// DEFAULT SETTINGS     // ** PRESET APP SETTINGS
// ************************
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ELEMENTS               // ** IMPORT CODE
// ************************
import { NavComponent } from './elements/nav/nav.component';

// SVG FILES               // ** IMPORT CODE
// ************************
import { WhiteLogoComponent } from './svg/white-logo/white-logo.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteLogoComponent,
    NavComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
