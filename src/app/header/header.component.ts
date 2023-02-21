import { Component } from '@angular/core';
declare function myFunction(): any;
declare function TwakTo(): any;
declare function nav(): any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  ngOnInit(): void {
    myFunction();
    TwakTo();
  }
}
