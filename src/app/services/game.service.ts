import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  score = new BehaviorSubject<number>(0);
  status = new BehaviorSubject<string>('');
  time = new BehaviorSubject<number>(0);

  private startTime = 0;
  private elapsedTime = 0;
  private timer: any;

  addScore(score: number) {
    this.score.next(score);
  }

  start() {
    this.score.next(0);
    this.status.next('START');

    this.startTime = Date.now() - this.elapsedTime;

    this.timer = setInterval(() => {
      this.timerTick();
    }, 1000);
  }

  stop() {
    this.stopTimer();
    this.status.next('PAUSE');
  }

  reset() {
    this.score.next(0);
    this.stopTimer();
    this.start();
  }

  lineCleared() {
    this.score.next(this.score.value + 1);
  }

  gameOver() {
    this.status.next('GAME OVER');
    this.stopTimer();
  }

  private stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
      this.startTime = 0;
    }
  }

  private timerTick() {
    this.elapsedTime = Date.now() - this.startTime;
    const seconds = this.elapsedTime;
    this.time.next(seconds);
  }
}
