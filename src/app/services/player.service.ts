import { Injectable } from '@angular/core';

export interface PlayerData {
  playerName: string;
  colorPalette: string;
  authCode?: string;
}

const emptyPlayerData: PlayerData = {
  playerName: '',
  colorPalette: '',
};

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerName: string = '';
  private playerData = emptyPlayerData;

  hasPlayerData(): boolean {
    return this.playerData.playerName !== '';
  }

  getSavedData(): PlayerData {
    const playerName = localStorage.getItem('playerName') || '';
    const colorPalette = localStorage.getItem('colorPalette') || 'normal';

    this.playerData = {
      playerName,
      colorPalette,
    };

    return this.playerData;
  }

  clearData(): void {
    this.playerData = emptyPlayerData;
    localStorage.clear();
  }

  getPlayerName(): string {
    return this.playerName;
  }

  setPlayerData(playerData: PlayerData): void {
    localStorage.setItem('playerName', playerData.playerName);
    localStorage.setItem('colorPalette', playerData.colorPalette);

    this.playerData = playerData;
  }

  getCurrentHighscores(game: string, colors: string): Promise<any> {
    return fetch(`api/scores/${game}/${colors}`).then((response) =>
      response.json()
    );
  }

  setPlayerColorPalette(colorPalette: string): void {
    localStorage.setItem('colorPalette', colorPalette);
    this.playerData.colorPalette = colorPalette;
  }
}
