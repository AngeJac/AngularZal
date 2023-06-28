import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  public readyToPlay = false;
  public playerName = '';
  public email = '';
  public colorPalette: string = 'normal';

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private route: ActivatedRoute
  ) {}

  onFormSubmit() {
    if (this.playerName.length >= 5 && this.email) {
      const playerData = {
        playerName: this.playerName,
        email: this.email,
        colorPalette: this.colorPalette,
      };
      this.playerService.setPlayerData(playerData);
      this.playerService.setPlayerColorPalette(this.colorPalette);
      this.readyToPlay = true;
      this.router.navigate(['/tetris-page', this.colorPalette]);
    }
  }
  onGameFinished(gameFinished: boolean) {
    if (gameFinished) {
      this.readyToPlay = false;
    }
  }
  goBack() {
    this.router.navigate(['/']);
  }
}
