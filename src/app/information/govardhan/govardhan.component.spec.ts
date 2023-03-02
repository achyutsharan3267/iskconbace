import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovardhanComponent } from './govardhan.component';

describe('GovardhanComponent', () => {
  let component: GovardhanComponent;
  let fixture: ComponentFixture<GovardhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovardhanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovardhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
