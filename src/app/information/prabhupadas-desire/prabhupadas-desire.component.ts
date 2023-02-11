import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-prabhupadas-desire',
  templateUrl: './prabhupadas-desire.component.html',
  styleUrls: ['./prabhupadas-desire.component.scss'],
})
export class PrabhupadasDesireComponent {
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

  quotesoption: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 5000,
    dots: false,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
        nav: false,
      },
    },
    nav: false,
  };
}
