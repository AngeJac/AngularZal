// highscores.component.ts
import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.scss'],
})
export class HighscoresComponent implements OnInit {
  public highscores: any[] = [];
  public sortBy: string = 'desc';

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadHighscores();
  }

  loadHighscores(): void {
    this.playerService
      .getCurrentHighscores('tetris', 'colors')
      .then((highscores) => {
        this.highscores = highscores;
        this.sortHighscores();
      })
      .catch((error) => {
        console.error(
          'Wystąpił błąd podczas pobierania najlepszych wyników:',
          error
        );
      });
  }

  sortHighscores(): void {
    if (this.sortBy === 'asc') {
      this.highscores.sort((a, b) => a.score - b.score);
    } else {
      this.highscores.sort((a, b) => b.score - a.score);
    }
  }

  changeSortOrder(): void {
    if (this.sortBy === 'asc') {
      this.sortBy = 'desc';
    } else {
      this.sortBy = 'asc';
    }
    this.sortHighscores();
  }
}
