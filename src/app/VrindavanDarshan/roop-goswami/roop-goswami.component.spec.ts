import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoopGoswamiComponent } from './roop-goswami.component';

describe('RoopGoswamiComponent', () => {
  let component: RoopGoswamiComponent;
  let fixture: ComponentFixture<RoopGoswamiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoopGoswamiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoopGoswamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
