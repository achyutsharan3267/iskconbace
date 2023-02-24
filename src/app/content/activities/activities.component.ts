import { Component } from '@angular/core';
declare function animation(): any;
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent {
  ngOnInit(): void {
    animation();
  }
}
