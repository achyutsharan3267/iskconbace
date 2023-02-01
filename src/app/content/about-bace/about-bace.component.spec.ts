import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBaceComponent } from './about-bace.component';

describe('AboutBaceComponent', () => {
  let component: AboutBaceComponent;
  let fixture: ComponentFixture<AboutBaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutBaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
