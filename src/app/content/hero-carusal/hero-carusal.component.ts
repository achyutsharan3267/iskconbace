import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-hero-carusal',
  templateUrl: './hero-carusal.component.html',
  styleUrls: ['./hero-carusal.component.scss'],
})
export class HeroCarusalComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 5000,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };
}
