import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { TetrisPageComponent } from './tetris-page/tetris-page.component';
import { PlayerService } from './player.service';
import { HighscoresComponent } from './HighscoresComponent/highscores.component';

const routes: Routes = [
  { path: 'first-page', component: FirstPageComponent },
  { path: 'tetris-page/:colors', component: TetrisPageComponent },
  { path: 'highscores', component: HighscoresComponent },
  { path: '', redirectTo: '/first-page', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    TetrisPageComponent,
    HighscoresComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [PlayerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
