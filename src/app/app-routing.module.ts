import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { TetrisPageComponent } from './pages/tetris-page/tetris-page.component';
import { HighscoresComponent } from './pages/HighscoresComponent/highscores.component';

import { ClearDataGuard } from './guards/clear-data.guard';
import { PlayerDataGuard } from './guards/player-data.guard';

const routes: Routes = [
  {
    path: 'player',
    component: FirstPageComponent,
    canActivate: [ClearDataGuard],
  },
  {
    path: 'tetris/:colors',
    component: TetrisPageComponent,
    canActivate: [PlayerDataGuard],
  },
  {
    path: 'highscores',
    component: HighscoresComponent,
  },
  {
    path: 'tetris',
    redirectTo: '/tetris/normal',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: '/player',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
