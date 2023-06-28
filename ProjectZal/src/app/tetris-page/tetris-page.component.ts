import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './tetris-page.component.html',
  styleUrls: ['./tetris-page.component.scss'],
})
export class TetrisPageComponent implements OnInit {
  public playerName: string = '';
  public score = 0;
  public gamePlayTime = '00:00';
  public timerInterval: any;
  public timePlayed = 0;
  public gameStatus = '';
  public colorPalette: string = 'normal';

  @Output() public onGameExit = new EventEmitter<boolean>();
  @Output() public scoreValue = new EventEmitter<number>();
  @Output() public timerValue = new EventEmitter<number>();

  @ViewChild(TetrisCoreComponent, { static: false })
  private _tetris!: TetrisCoreComponent;

  public onLineCleared = () => {
    this.score++;
    this.scoreValue.emit(this.score);
  };

  public onGameOver = () => {
    this.gameStatus = 'GAME OVER';
  };
  public startTimer = () => {
    if (this.timerInterval) {
      this.pauseTimer();
    }
    this.timerInterval = setInterval(() => {
      this.timePlayed++;
      this.displayTime();
    }, 1000);
  };

  public pauseTimer = () => {
    clearInterval(this.timerInterval);
  };

  public displayTime = () => {
    const min = String(Math.trunc(this.timePlayed / 60)).padStart(2, '0');

    const sec = String(this.timePlayed % 60).padStart(2, '0');

    this.gamePlayTime = `${min}:${sec}`;
  };
  public onExitButtonPressed = () => {
    this.onGameExit.emit(true);
    this.score = 0;
    clearInterval(this.timerInterval);
    this.timePlayed = 0;
    this.timerValue.emit(this.timePlayed);
    this.scoreValue.emit(this.score);
    this.gameStatus = 'READY';
    this._tetris.actionReset();
  };

  public onRotateButtonPressed = () => {
    this._tetris.actionRotate();
  };

  public onRotationButtonPressed = () => {
    this._tetris.actionRotate();
  };
  public onLeftButtonPressed = () => {
    this._tetris.actionLeft();
  };
  public onRightButtonPressed = () => {
    this._tetris.actionRight();
  };
  public onDownButtonPressed = () => {
    this._tetris.actionDown();
  };
  public onDropButtonPressed = () => {
    this._tetris.actionDrop();
  };

  public onStartButtonPressed = () => {
    this._tetris.actionStart();
    this.gameStatus = 'START';
    this.startTimer();
  };
  public onStopButtonPressed = () => {
    this._tetris.actionStop();
    clearInterval(this.timerInterval);
    this.gameStatus = 'PAUSE';
  };

  public onResetButtonPressed = () => {
    this.score = 0;
    this.timePlayed = 0;
    clearInterval(this.timerInterval);
    this.timerValue.emit(this.timePlayed);
    this.scoreValue.emit(this.score);
    this.gameStatus = 'READY, STEADY, GO!';
    this._tetris.actionReset();
  };

  constructor(
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.colorPalette = params['colors'] || 'normal';
    });
    this.loadHighscores();
  }
  loadHighscores(): void {
    this.playerService
      .getCurrentHighscores('tetris', this.colorPalette)
      .then((highscores) => {
        console.log(highscores);
      })
      .catch((error) => {
        console.error(
          'Wystąpił błąd podczas pobierania najlepszych wyników:',
          error
        );
      });
  }
  onColorPaletteChange(): void {
    this.router.navigate(['/tetris-page', this.colorPalette]);
  }
}
