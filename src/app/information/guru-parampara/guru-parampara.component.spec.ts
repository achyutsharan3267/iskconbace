import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuruParamparaComponent } from './guru-parampara.component';

describe('GuruParamparaComponent', () => {
  let component: GuruParamparaComponent;
  let fixture: ComponentFixture<GuruParamparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuruParamparaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuruParamparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
