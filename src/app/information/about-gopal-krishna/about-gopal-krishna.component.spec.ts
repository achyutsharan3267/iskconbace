import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGopalKrishnaComponent } from './about-gopal-krishna.component';

describe('AboutGopalKrishnaComponent', () => {
  let component: AboutGopalKrishnaComponent;
  let fixture: ComponentFixture<AboutGopalKrishnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutGopalKrishnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutGopalKrishnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
