import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { FirstPageComponent } from './first-page/first-page.component';
import { FormsModule } from '@angular/forms';
import { TetrisPageComponent } from './tetris-page/tetris-page.component';

@NgModule({
  declarations: [AppComponent, FirstPageComponent, TetrisPageComponent],
  imports: [BrowserModule, TetrisCoreModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
