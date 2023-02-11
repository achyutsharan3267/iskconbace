import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabhupadasDesireComponent } from './prabhupadas-desire.component';

describe('PrabhupadasDesireComponent', () => {
  let component: PrabhupadasDesireComponent;
  let fixture: ComponentFixture<PrabhupadasDesireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrabhupadasDesireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrabhupadasDesireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
