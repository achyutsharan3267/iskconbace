import { Component } from '@angular/core';
declare function animation(): any;
@Component({
  selector: 'app-about-iskcon',
  templateUrl: './about-iskcon.component.html',
  styleUrls: ['./about-iskcon.component.scss'],
})
export class AboutIskconComponent {
  ngOnInit(): void {
    animation();
  }
}
