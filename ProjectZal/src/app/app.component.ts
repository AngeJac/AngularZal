import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tetris';

  public state = 'form';
  public onSubmitted(event: any) {
    this.state = 'game';
  }
  public activePlayer = '';
  public readyToPlay = false;

  public onFormCompleted(playerName: string): void {
    if (playerName) {
      this.readyToPlay = true;
      this.activePlayer = playerName;
    }
  }

  public onGameFinished(gameFinished: boolean) {
    if (gameFinished) {
      this.readyToPlay = false;
    }
  }
}
