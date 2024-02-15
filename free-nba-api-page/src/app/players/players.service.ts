import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PlayersApiRequest } from '../games/game.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  //TODO cut and paste to another const file where we use environment variables, and because we don't want to repeat code in services
  private readonly apiOptions = {
    [environment.xRapidApiKeyKey]: environment.xRapidApiKeyValue,
    [environment.xRapidApiHostKey]: environment.xRapidApiHostValue
  }

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<PlayersApiRequest> {
    //TODO: set page and per page date with parameters 
    return this.http.get<PlayersApiRequest>('https://free-nba.p.rapidapi.com/players', { headers: this.apiOptions })
      .pipe(
        map(responseData => {
          return responseData
        })
      );
  }
}
