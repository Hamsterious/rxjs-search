// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Custom type imports

@Injectable()
export class TwitchService {

  // Properties
  private baseUrl = ' https://api.twitch.tv/kraken/';

  // Constructor
  constructor(private http: Http) { }

  // Methods
  public searchByQuery(searchQuery): Observable<any> {
    const endpoint = 'search/streams';
    const query = encodeURIComponent(searchQuery);
    const limit = '3';

    const params = `${endpoint}?query=${query}&limit=${limit}`;

    console.log(this.baseUrl + params);

    return this.http.get(this.baseUrl + params, this.getHeaderOption()).map(x => x.json());
  }

  private getHeaderOption(): RequestOptions {
    const headers = new Headers({
      'Accept': 'application/vnd.twitchtv.v5+json',
      'Client-ID': '3uxq0d3718ojw9lb5l8xxzluv7ugda'
    });
    return new RequestOptions({ headers: headers });
  }
}
