import { Component } from '@angular/core';
declare function animation(): any;
@Component({
  selector: 'app-temple-of-vrindavan',
  templateUrl: './temple-of-vrindavan.component.html',
  styleUrls: ['./temple-of-vrindavan.component.scss'],
})
export class TempleOfVrindavanComponent {
  ngOnInit(): void {
    animation();
  }
}
