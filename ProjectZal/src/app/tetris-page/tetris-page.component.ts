import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';

@Component({
  selector: 'app-game',
  templateUrl: './tetris-page.component.html',
  styleUrls: ['./tetris-page.component.scss'],
})
export class TetrisPageComponent implements OnInit {
  @Input() public playerName: string = '';
  public score: number = 0;
  public timer: number = 0;
  public gamePlayTime: string = '00:00';
  public interval: any;
  public timerInterval: any;
  public timePlayed: number = 0;
  public gameStatus: string = '';
  @Output() public exit = new EventEmitter<boolean>();
  @Output() public onGameExit = new EventEmitter<boolean>();
  @Output() public scoreValue = new EventEmitter<number>();
  @Output() public timerValue = new EventEmitter<number>();

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
    this.isGameActive = false;
    clearInterval(this.timerInterval);
    this.timer = 0;
    this.gameStatus = 'GAME OVER';
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
  public onExitButtonPressed() {
    this.onGameExit.emit(true);
    this.score = 0;
    clearInterval(this.timerInterval);
    this.timer = 0;
    this.timerValue.emit(this.timer);
    this.scoreValue.emit(this.score);
    this.gameStatus = 'READY';
    this._tetris.actionReset();
  }

  public onRotateButtonPressed() {
    this._tetris.actionRotate();
  }
  @ViewChild('game')
  private _tetris!: TetrisCoreComponent;

  public onStartButtonPressed() {
    this._tetris.actionStart();
    this.gameStatus = 'START';
    this.gamePlayTime;
    this.startTimer();
  }
  public onStopButtonPressed() {
    this._tetris.actionStop();
    this.timer = this.timer;
    clearInterval(this.timerInterval);
    this.timerValue.emit(this.timer);
    this.gameStatus = 'PAUSE';
    this.pauseTimer();
  }
  public onResetButtonPressed() {
    this.score = 0;
    clearInterval(this.timerInterval);
    this.timer = 0;
    this.timerValue.emit(this.timer);
    this.scoreValue.emit(this.score);
    this.gameStatus = 'READY, STEADY, GO!';
    this._tetris.actionReset();
  }
  public onRotationButtonPressed() {
    this._tetris.actionRotate();
  }
  public onLeftButtonPressed() {
    this._tetris.actionLeft();
  }
  public onRightButtonPressed() {
    this._tetris.actionRight();
  }
  public onDownButtonPressed() {
    this._tetris.actionDown();
  }
  public onDropButtonPressed() {
    this._tetris.actionDrop();
  }
  constructor() {}
  ngOnInit(): void {}
}
