import { Component } from '@angular/core';
declare function animation(): any;
@Component({
  selector: 'app-yamuna',
  templateUrl: './yamuna.component.html',
  styleUrls: ['./yamuna.component.scss'],
})
export class YamunaComponent {
  ngOnInit(): void {
    animation();
  }
}
