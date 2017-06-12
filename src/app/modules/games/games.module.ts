// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Custom
import { GamesService } from '../../services/games.service';
import { DetailsComponent } from './details/details.component';
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
  providers: [GamesService]
})
export class GamesModule { }
