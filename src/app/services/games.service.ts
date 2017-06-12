// Angular
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

// Rxjs imports
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// Custom type imports

@Injectable()
export class GamesService {

  // Properties
  private baseUrl = 'https://igdbcom-internet-game-database-v1.p.mashape.com/';

  // Constructor
  constructor(private http: Http) { }

  // Methods
  public get(endpoint: string, fields: string, limit: number, offset: number, order: string): Observable<any> {
    const params = `${endpoint}?fields=${fields}&limit=${limit}&offset=${offset}&order=${order}`;

    return this.http.get(this.baseUrl + params, this.getHeaderOption()).map(x => x.json());
  }

  public getGameById(id: number): Observable<any> {
    const targetUrl = this.baseUrl + 'games/' + id + '?fields=*';
    return this.http.get(targetUrl, this.getHeaderOption()).map(x => x.json());
  }

  private getHeaderOption(): RequestOptions {
    const headers = new Headers({
      'Accept': 'application/json',
      'X-Mashape-Key': 'JSxWUaoZi0msh5RAhtWYCdOf4ElWp1LGz6Pjsnwfy0YOcnqY5f'
    });
    return new RequestOptions({ headers: headers });
  }
}
