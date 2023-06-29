import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { PlayerService } from '../services/player.service';

@Injectable({
  providedIn: 'root',
})
export class ClearDataGuard implements CanActivate {
  constructor(private playerService: PlayerService) {}

  canActivate(): boolean {
    this.playerService.clearData();
    return true;
  }
}
