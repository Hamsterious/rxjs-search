// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Custom type imports

@Injectable()
export class YoutubeService {

  // Properties
  private baseUrl = 'https://www.googleapis.com/youtube/v3/';
  private key = 'AIzaSyCA_g_zkSTCCGuNPy7zjZtOHcXWokwCTdU'

  // Constructor
  constructor(private http: Http) { }

  // Methods
  public searchByQuery(searchQuery): Observable<any> {
    const endpoint = 'search';
    const part = 'snippet';
    const query = encodeURIComponent(searchQuery);
    const maxResults = '3';
    const fields = 'items(id,snippet(title,description))';

    const params = `${endpoint}?key=${this.key}&part=${part}&q=${query}&maxResults=${maxResults}&fields=${fields}`;

    return this.http.get(this.baseUrl + params, this.getHeaderOption()).map(x => x.json());
  }

  private getHeaderOption(): RequestOptions {
    const headers = new Headers({
      'content-type': 'application/json'
    });
    return new RequestOptions({ headers: headers });
  }
}
