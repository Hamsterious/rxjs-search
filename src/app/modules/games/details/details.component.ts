// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

// Rxjs imports
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

// Services
import { GamesService } from '../../../services/games.service';
import { YoutubeService } from '../../../services/youtube.service';
import { TwitchService } from '../../../services/twitch.service';

// Component
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Properties
  private game: any;
  private youtubeResult: any;
  private twitchResult: any;

  // Constructor
  constructor(
    private gamesService: GamesService,
    private youtubeService: YoutubeService,
    private twitchService: TwitchService,
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.getGameById();
  }

  // Methods
  private getGameById(): void {
    this.gamesService
      .getGameById(this.getRouteParam('id'))
      .map(x => {
        x.forEach((game: any) => {
          if (game.cover && game.cover.url) {
            game.cover.url = game.cover.url.replace('t_thumb/', 't_cover_big/')
          }

          if (game.videos) {
            game.videos.forEach(video => {
              video.youtube_url = 'https://www.youtube.com/embed/' + video.video_id;
            });
          }
        });
        return x;
      })
      .subscribe(x => {
        this.game = x[0];
        this.searchYoutube(this.game.name);
        this.searchTwitch(this.game.name);
      });
  }

  private searchYoutube(gameName: string): void {
    this.youtubeService
      .searchByQuery(gameName + ' review')
      .map((x: any) => {

        x.items.forEach((video: any) => {
          video.youtube_url = 'https://www.youtube.com/embed/' + video.id.videoId;
        });

        return x;
      })
      .subscribe(x => {
        x.items = x.items.filter(video => {
          return video.snippet.title.toLowerCase().includes(gameName.toLowerCase());
        });
        this.youtubeResult = x;
      });
  }

  private searchTwitch(gameName: string): void {
    this.twitchService
      .searchByQuery(gameName)
      .map((x: any) => {

        x.streams.forEach(stream => {
          stream.stream_url = `http://player.twitch.tv/?channel=${stream.channel.name}&muted=true&autoplay=false`;
        });

        return x;
      }).subscribe(x => {

        x.streams = x.streams.filter(stream => {
          return stream.game.toLowerCase().includes(gameName.toLowerCase());
        });

        this.twitchResult = x;
      });
  }

  private getRouteParam(param: string): number {
    let result = 0;

    this.route.params
      .map((params: Params) => params[param])
      .subscribe(x => result = x);

    return result;
  }
}
