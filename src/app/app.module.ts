import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TetrisCoreModule } from 'ngx-tetris';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { TetrisPageComponent } from './pages/tetris-page/tetris-page.component';
import { HighscoresComponent } from './pages/HighscoresComponent/highscores.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ColorPaletComponent } from './components/color-palet/color-pallet.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TetrisControlsComponent } from './components/tetris-controls/tetris-controls.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    TetrisPageComponent,
    HighscoresComponent,
    PlayerFormComponent,
    ColorPaletComponent,
    NavigationComponent,
    TetrisControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TetrisCoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
