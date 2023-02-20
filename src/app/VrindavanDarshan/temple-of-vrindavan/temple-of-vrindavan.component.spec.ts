import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleOfVrindavanComponent } from './temple-of-vrindavan.component';

describe('TempleOfVrindavanComponent', () => {
  let component: TempleOfVrindavanComponent;
  let fixture: ComponentFixture<TempleOfVrindavanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempleOfVrindavanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempleOfVrindavanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
