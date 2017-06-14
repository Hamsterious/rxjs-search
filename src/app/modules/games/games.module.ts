// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Services
import { GamesService } from '../../services/games.service';
import { YoutubeService } from '../../services/youtube.service';
import { TwitchService } from '../../services/twitch.service';

// Components
import { DetailsComponent } from './details/details.component';

// Modules
import { GamesRoutesModule } from './games-routes.module';

// Module
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    GamesRoutesModule
  ],
  exports: [
    IndexComponent,
    GamesRoutesModule
  ],
  declarations: [IndexComponent, DetailsComponent],
  providers: [GamesService, YoutubeService, TwitchService]
})
export class GamesModule { }
