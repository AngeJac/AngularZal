import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tetris-controls',
  templateUrl: './tetris-controls.component.html',
  styleUrls: ['./tetris-controls.component.scss'],
})
export class TetrisControlsComponent {
  @Output() start = new EventEmitter();
  @Output() stop = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() exit = new EventEmitter();

  @Output() rotate = new EventEmitter();
  @Output() left = new EventEmitter();
  @Output() right = new EventEmitter();
  @Output() down = new EventEmitter();
  @Output() drop = new EventEmitter();
}
