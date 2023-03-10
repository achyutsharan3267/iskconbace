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
import { AboutIskconComponent } from './information/about-iskcon/about-iskcon.component';
import { GuruParamparaComponent } from './information/guru-parampara/guru-parampara.component';
import { AboutParbhupadComponent } from './information/about-parbhupad/about-parbhupad.component';
import { AboutGopalKrishnaComponent } from './information/about-gopal-krishna/about-gopal-krishna.component';
import { PrabhupadasDesireComponent } from './information/prabhupadas-desire/prabhupadas-desire.component';
import { TempleOfVrindavanComponent } from './VrindavanDarshan/temple-of-vrindavan/temple-of-vrindavan.component';
import { YamunaComponent } from './VrindavanDarshan/yamuna/yamuna.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { GovardhanComponent } from './information/govardhan/govardhan.component';
import { PrabhupadRoomComponent } from './VrindavanDarshan/prabhupad-room/prabhupad-room.component';
import { RoopGoswamiComponent } from './VrindavanDarshan/roop-goswami/roop-goswami.component';
import { KirtanComponent } from './kirtan/kirtan.component';

const routes: Routes = [
  { path: '', component: HeroCarusalComponent },
  { path: 'AboutIskcon', component: AboutIskconComponent },
  { path: 'AboutParbhupad', component: AboutParbhupadComponent },
  { path: 'AboutGopalKrishna', component: AboutGopalKrishnaComponent },
  { path: 'PrabhupadasDesire', component: PrabhupadasDesireComponent },
  { path: 'GuruParampara', component: GuruParamparaComponent },
  { path: 'TempleOfVrindavan', component: TempleOfVrindavanComponent },
  { path: 'Yamuna', component: YamunaComponent },
  { path: 'GuruParampara', component: GuruParamparaComponent },
  { path: 'Photogallery', component: PhotogalleryComponent },
  { path: 'Govardhan', component: GovardhanComponent },
  { path: 'PrabhupadRoom', component: PrabhupadRoomComponent },
  { path: 'RoopGoswami', component: RoopGoswamiComponent },
  { path: 'Kirtan', component: KirtanComponent },
];
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
    AboutIskconComponent,
    GuruParamparaComponent,
    AboutParbhupadComponent,
    AboutGopalKrishnaComponent,
    PrabhupadasDesireComponent,
    TempleOfVrindavanComponent,
    YamunaComponent,
    PhotogalleryComponent,
    GovardhanComponent,
    PrabhupadRoomComponent,
    RoopGoswamiComponent,
    KirtanComponent,
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
