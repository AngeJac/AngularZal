import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { FirstPageComponent } from './first-page/first-page.component';
import { TetrisPageComponent } from './tetris-page/tetris-page.component';
import { TetrisCoreModule } from 'ngx-tetris';

@NgModule({
  declarations: [AppComponent, TetrisPageComponent],
  imports: [
    BrowserModule,
    // HotkeyModule.forRoot(),
    TetrisCoreModule,
    TetrisPageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
