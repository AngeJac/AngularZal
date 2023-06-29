import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-color-pallet',
  templateUrl: './color-pallet.component.html',
  styleUrls: ['./color-pallet.component.css'],
})
export class ColorPaletComponent {
  colorCtr = new FormControl();

  @Input() colorPalette: string = 'normal';
  @Output() colorChanged = new EventEmitter<string>();

  ngOnInit(): void {
    this.colorCtr.valueChanges.subscribe((value) => {
      this.colorChanged.emit(value ?? 'normal');
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['colorPalette']) {
      this.colorCtr.setValue(this.colorPalette);
    }
  }
}
