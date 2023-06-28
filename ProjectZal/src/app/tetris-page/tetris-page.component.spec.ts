import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisPageComponent } from './tetris-page.component';

describe('TetrisPageComponent ', () => {
  let component: TetrisPageComponent;
  let fixture: ComponentFixture<TetrisPageComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [TetrisPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create TetrisPageComponent instance', () => {
    expect(component).toBeTruthy();
  });
});
