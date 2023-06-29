import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root',
})
export class PlayerDataGuard implements CanActivate {
  constructor(private playerService: PlayerService) {}

  canActivate() {
    return this.playerService.hasPlayerData();
  }
}
