import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCarusalComponent } from './hero-carusal.component';

describe('HeroCarusalComponent', () => {
  let component: HeroCarusalComponent;
  let fixture: ComponentFixture<HeroCarusalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroCarusalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCarusalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
