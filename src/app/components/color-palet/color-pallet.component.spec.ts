import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletComponent } from './color-pallet.component';

describe('ColorPaletComponent', () => {
  let component: ColorPaletComponent;
  let fixture: ComponentFixture<ColorPaletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorPaletComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPaletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
