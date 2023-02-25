import { Component, ViewChild } from '@angular/core';
// import {TetrisCoreComponent} from '../../../ngx-tetris/src/public-api';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-root',
  templateUrl: './tetris-page.component.html',
  styleUrls: ['./tetris-page.component.scss'],
})
export class TetrisPageComponent {
  @ViewChild('game')
  private _tetris!: TetrisCoreComponent;

  public bw = false;
  public moveLeft = false;
  public moveDown = false;
  public moveRight = false;
  public rotate = false;
  public start = false;
  public stop = false;
  public reset = false;
  game: any;

  // constructor(private _hotkeysService: HotkeysService) {
  //     this._addHotkeys();
  // }

  public onLineCleared() {
    console.log('line cleared');
  }

  public onGameOver() {
    alert('game over');
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }
}
