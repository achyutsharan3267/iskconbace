import { Component } from '@angular/core';
declare function animation(): any;
@Component({
  selector: 'app-about-bace',
  templateUrl: './about-bace.component.html',
  styleUrls: ['./about-bace.component.scss'],
})
export class AboutBaceComponent {
  ngOnInit(): void {
    animation();
  }
}
