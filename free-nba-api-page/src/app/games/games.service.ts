import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GamesApiRequest } from './game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GamesService {
  //TODO cut and paste to another const file where we use environment variables, and because we don't want to repeat code in services
  readonly apiOptions = {
    [environment.xRapidApiKeyKey]: environment.xRapidApiKeyValue,
    [environment.xRapidApiHostKey]: environment.xRapidApiHostValue
  }

  constructor(private http: HttpClient) { }

  getGames(): Observable<GamesApiRequest> {
    //TODO: set page and per page date with parameters 
    return this.http.get<GamesApiRequest>('https://free-nba.p.rapidapi.com/games?page=0&per_page=100', { headers: this.apiOptions })
      .pipe(
        map(responseData => {
          return responseData
        })
      );
  }
}
