import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Custom
import { GamesService } from '../../services/games.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule
  ],
  exports: [
    IndexComponent
  ],
  declarations: [IndexComponent],
  providers: [GamesService]
})
export class GamesModule { }
