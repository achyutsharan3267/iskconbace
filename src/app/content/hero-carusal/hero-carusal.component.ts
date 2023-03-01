import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-hero-carusal',
  templateUrl: './hero-carusal.component.html',
  styleUrls: ['./hero-carusal.component.scss'],
})
export class HeroCarusalComponent {
  CarusalData = [
    'https://i.postimg.cc/3NGnwxz4/image4.jpg',
    'https://i.postimg.cc/1RVWBv4m/image5.jpg',
    'https://i.postimg.cc/rFSfXzS7/image6.jpg',
    'https://i.postimg.cc/jj88g9z5/image7.jpg',
    'https://i.postimg.cc/k4BTkccy/iskconradhe-Krishna.jpg',
    'https://i.postimg.cc/PrGSR18m/iskconradhe-Krishnaw.jpg',
  ];

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
