import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabhupadRoomComponent } from './prabhupad-room.component';

describe('PrabhupadRoomComponent', () => {
  let component: PrabhupadRoomComponent;
  let fixture: ComponentFixture<PrabhupadRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrabhupadRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrabhupadRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
