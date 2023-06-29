import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerData, PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-form',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent {
  playerName = 'Player';
  playerData = this.playerService.getSavedData();

  constructor(private router: Router, private playerService: PlayerService) {}

  onFormSubmit(playerData: PlayerData) {
    this.playerService.setPlayerData(playerData);
    this.router.navigate(['/tetris', playerData.colorPalette]);
  }

  onColorPaletteChange(color: string) {
    this.playerService.setPlayerColorPalette(color);
  }
}
