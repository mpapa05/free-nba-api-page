import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { StatsApiRequest } from '../games/game.model';


@Injectable({
    providedIn: 'root'
})

export class StatsService {
  //TODO cut and paste to another const file where we use environment variables, and because we don't want to repeat code in services
  private readonly apiOptions = {
    [environment.xRapidApiKeyKey]: environment.xRapidApiKeyValue,
    [environment.xRapidApiHostKey]: environment.xRapidApiHostValue
  }

  constructor(private http: HttpClient) { }

  getStats(): Observable<StatsApiRequest> {
        //TODO: set page and per page date with parameters 
        return this.http.get<StatsApiRequest>('https://free-nba.p.rapidapi.com/stats', { headers: this.apiOptions })
        .pipe(
          map(responseData => {
            return responseData
          })
        );
    }
  }