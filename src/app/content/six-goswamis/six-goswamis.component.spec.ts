import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixGoswamisComponent } from './six-goswamis.component';

describe('SixGoswamisComponent', () => {
  let component: SixGoswamisComponent;
  let fixture: ComponentFixture<SixGoswamisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixGoswamisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixGoswamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
