import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIskconComponent } from './about-iskcon.component';

describe('AboutIskconComponent', () => {
  let component: AboutIskconComponent;
  let fixture: ComponentFixture<AboutIskconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutIskconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutIskconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
