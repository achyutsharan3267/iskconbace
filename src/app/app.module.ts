import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutBaceComponent } from './content/about-bace/about-bace.component';
import { ActivitiesComponent } from './content/activities/activities.component';
import { CelebrationComponent } from './content/celebration/celebration.component';
import { HeroCarusalComponent } from './content/hero-carusal/hero-carusal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutBaceComponent,
    ActivitiesComponent,
    CelebrationComponent,
    HeroCarusalComponent,
  ],
  imports: [BrowserModule, NgbModule, CarouselModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
