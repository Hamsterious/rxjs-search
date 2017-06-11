import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StartComponent } from './start.component';
import { GamesModule } from '../games/games.module';

@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    BrowserModule,
    GamesModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class StartModule { }
