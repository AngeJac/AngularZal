import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss'],
})
export class FirstPageComponent implements OnInit {
  public readyToPlay = false;
  public playerForm!: FormGroup;

  constructor(
    private router: Router,
    private playerService: PlayerService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.playerForm = this.formBuilder.group({
      playerName: ['', [Validators.required, Validators.minLength(5)]],
      authCode: ['', [Validators.required, Validators.minLength(5)]],
      colorPalette: ['normal'],
    });
    const storedPlayerName = localStorage.getItem('playerName');
    const storedColorPalette = localStorage.getItem('colorPalette');

    if (storedPlayerName && storedColorPalette) {
      this.playerForm.patchValue({
        playerName: storedPlayerName,
        colorPalette: storedColorPalette,
      });
    }
  }

  onFormSubmit() {
    if (this.playerForm.valid) {
      const playerData = {
        playerName: this.playerForm.value.playerName,
        authCode: this.playerForm.value.authCode,
        colorPalette: this.playerForm.value.colorPalette,
      };
      localStorage.setItem('playerName', playerData.playerName);
      localStorage.setItem('colorPalette', playerData.colorPalette);

      this.playerService.setPlayerData(playerData);
      this.playerService.setPlayerColorPalette(playerData.colorPalette);
      this.readyToPlay = true;
      this.router.navigate(['/tetris-page', playerData.colorPalette]);
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
  onColorPaletteChange() {
    const colorPalette = this.playerForm.value.colorPalette;
    localStorage.setItem('colorPalette', colorPalette);
    this.router.navigate(['/tetris-page', colorPalette]);
  }
}
