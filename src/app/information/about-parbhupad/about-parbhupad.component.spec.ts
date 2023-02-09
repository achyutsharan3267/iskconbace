import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutParbhupadComponent } from './about-parbhupad.component';

describe('AboutParbhupadComponent', () => {
  let component: AboutParbhupadComponent;
  let fixture: ComponentFixture<AboutParbhupadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutParbhupadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutParbhupadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
