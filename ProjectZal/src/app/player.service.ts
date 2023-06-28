import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private playerName: string = '';
  private playerData: any = {};

  getPlayerName(): string {
    return this.playerName;
  }

  setPlayerName(playerName: string): void {
    this.playerName = playerName;
  }

  getPlayerData(): any {
    return this.playerData;
  }

  setPlayerData(playerData: any): void {
    this.playerData = playerData;
  }

  getCurrentHighscores(game: string, colors: string): Promise<any> {
    return fetch(`api/scores/${game}/${colors}`).then((response) =>
      response.json()
    );
  }

  setPlayerColorPalette(colorPalette: string): void {
    this.colorPalette = colorPalette;
  }

  getPlayerColorPalette(): string {
    return this.colorPalette;
  }
}
