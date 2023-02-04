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
import { FestivalsComponent } from './content/festivals/festivals.component';
import { FooterComponent } from './footer/footer.component';
import { AddressComponent } from './content/address/address.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: HeroCarusalComponent }];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutBaceComponent,
    ActivitiesComponent,
    CelebrationComponent,
    HeroCarusalComponent,
    FestivalsComponent,
    FooterComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarouselModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
