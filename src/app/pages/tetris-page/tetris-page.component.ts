import { Component, OnInit, ViewChild } from '@angular/core';
import { TetrisCoreComponent } from 'ngx-tetris';
import { ActivatedRoute } from '@angular/router';

import { GameService } from '../../services/game.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-tetris-page',
  templateUrl: './tetris-page.component.html',
  styleUrls: ['./tetris-page.component.scss'],
})
export class TetrisPageComponent implements OnInit {
  colorPalette: string = 'normal';
  playerName = this.playerService.getPlayerName();
  gameStatus = this.gameService.status;
  gamePlayTime = this.gameService.time;
  score = this.gameService.score;

  @ViewChild(TetrisCoreComponent, { static: false })
  private _tetris!: TetrisCoreComponent;

  constructor(
    private gameService: GameService,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.colorPalette = params['colors'] || 'normal';
    });
  }

  onLineCleared() {
    this.gameService.lineCleared();
  }

  onGameOver() {
    this.gameService.gameOver();
  }

  onStart() {
    this._tetris.actionStart();
    this.gameService.start();
  }

  onStop() {
    this._tetris.actionStop();
    this.gameService.stop();
  }

  onReset() {
    this._tetris.actionReset()
    this.gameService.reset();
  }

  onExit() {
    this._tetris.actionReset();
    this.gameService.stop();
  }
}
