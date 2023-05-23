import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-hero-carusal',
  templateUrl: './hero-carusal.component.html',
  styleUrls: ['./hero-carusal.component.scss'],
})
export class HeroCarusalComponent {
  CarusalData = [
    'https://i.postimg.cc/N0whKm67/out-1-1.jpg',
    'https://i.postimg.cc/MTWhDwrn/out-2-1.jpg',
    'https://i.postimg.cc/T2NZrZjP/out-3.jpg',
    'https://i.postimg.cc/bvYTVvpf/IMG20230520173206.jpg',
    'https://i.postimg.cc/Pq6B29GK/out-19.jpg',
    'https://i.postimg.cc/wjN8x0mj/out-1-1.jpg',
    'https://i.postimg.cc/VvJXQSH2/IMG20230520113805.jpg',
    'https://i.postimg.cc/tT5BCVkT/IMG20230520104429.jpg',
    'https://i.postimg.cc/mrTXxw3q/out-10.jpg',
    'https://i.postimg.cc/1z1BGKYX/IMG20230520111025.jpg',
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
