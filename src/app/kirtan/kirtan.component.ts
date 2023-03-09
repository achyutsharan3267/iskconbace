import { Component } from '@angular/core';
declare function music(): any;
@Component({
  selector: 'app-kirtan',
  templateUrl: './kirtan.component.html',
  styleUrls: ['./kirtan.component.scss'],
})
export class KirtanComponent {
  ngOnInit(): void {
    music();
  }
}
