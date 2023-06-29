import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisControlsComponent } from './tetris-controls.component';

describe('TetrisControlesComponent', () => {
  let component: TetrisControlsComponent;
  let fixture: ComponentFixture<TetrisControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TetrisControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TetrisControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
