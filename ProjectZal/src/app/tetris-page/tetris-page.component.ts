import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-game',
  templateUrl: './tetris-page.component.html',
  styleUrls: ['./tetris-page.component.scss'],
})
export class TetrisPageComponent {
  @Input() public playerName: string = '';
  public score: number = 0;
  public timePlayed: number = 0;
  public gamePlayTime: string = '00:00';
  public gameStatus: string = '';
  public interval: any;
  @Output() public onGameExit = new EventEmitter<boolean>();
  @Output() public scoreValue = new EventEmitter<number>();
  @Output() public timerValue = new EventEmitter<number>();
  @ViewChild('game')
  private _tetris!: TetrisCoreComponent;

  public moves = [
    'start',
    'stop',
    'reset',
    'pause',
    'rotate',
    'move left',
    'move right',
    'move down',
    'drop',
    'line cleared',
    'Game over',
  ];
  public isGameActive = false;

  public onLineCleared() {
    this.score++;
    this.scoreValue.emit(this.score);
  }
  public onGameOver() {
    this.timePlayed = this.timePlayed;
    clearInterval(this.interval);
    alert('GAME OVER!');
  }

  public onExitClick() {
    this.onGameExit.emit(true);
  }

  public gameStarted() {
    this.isGameActive = true;
    this.gameStatus = 'READY, STEADY, GO!';
    this.startTimer();
  }
  public gameReset() {
    this.timePlayed = 0;
    this.score = 0;
    this.displayTime();
    this.isGameActive;
    this.gameStatus = 'READY TO START';
  }
  public startTimer() {
    if (this.interval) {
      this.pauseTimer();
    }
    this.interval = setInterval(() => {
      this.timePlayed++;
      this.displayTime();
    }, 1000);
  }
  public pauseTimer() {
    clearInterval(this.interval);
  }
  public displayTime() {
    const min: string = String(Math.trunc(this.timePlayed / 60)).padStart(
      2,
      '0'
    );
    const sec: string = String(this.timePlayed % 60).padStart(2, '0');

    this.gamePlayTime = `${min}:${sec}`;
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }
}
