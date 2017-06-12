import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games.service';


@Component({
  selector: 'games-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  // Properties
  private games: any[];

  // Constructor
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
  }

  // Methods
  private getAll(): void {
    this.gamesService
      .get('games/', 'cover,name', 10, 0, 'release_dates.date%3Adesc')
      .map(x => {
        x.forEach((game: any) => {
          if (game.cover && game.cover.url) {
            game.cover.url = game.cover.url.replace('t_thumb/', 't_cover_big/')
          }
        });
        return x;
      })
      .subscribe((x: any) => {
        this.games = x;
      });
  }

  private logId(id: number): void {
    this.gamesService
      .getGameById(id).subscribe(x => console.log(x));
  }
}
