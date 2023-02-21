import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamunaComponent } from './yamuna.component';

describe('YamunaComponent', () => {
  let component: YamunaComponent;
  let fixture: ComponentFixture<YamunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YamunaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
