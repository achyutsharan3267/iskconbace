import { Component } from '@angular/core';
declare function animationparampara(): any;
@Component({
  selector: 'app-guru-parampara',
  templateUrl: './guru-parampara.component.html',
  styleUrls: ['./guru-parampara.component.scss'],
})
export class GuruParamparaComponent {
  ngOnInit(): void {
    animationparampara();
  }
  brahmasampradaya = [
    {
      GuruName: 'Brahma',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
    {
      GuruName: 'Shiva',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
    {
      GuruName: 'Narayana',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
    {
      GuruName: 'Vsihnu',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
  ];

  brahma = [
    {
      GuruName: 'Brahma',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
    {
      GuruName: 'Shiva',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
    {
      GuruName: 'Narayana',
      GuruImage: 'https://wallpapers.com/images/featured/opvqvid74jpkwi9n.jpg',
    },
  ];
}
