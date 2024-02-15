import { Injectable } from "@angular/core"
import { environment } from "../../environments/environment"
import { HttpClient } from "@angular/common/http"
import { Observable, map } from "rxjs";
import { TeamsApiRequest } from "../games/game.model";

@Injectable({
    providedIn: 'root'
})

export class TeamsService {
    private readonly apiOptions = {
        [environment.xRapidApiKeyKey]: environment.xRapidApiKeyValue,
        [environment.xRapidApiHostKey]: environment.xRapidApiHostValue
      }

    constructor(private http: HttpClient) { }

    getTeams(): Observable<TeamsApiRequest> {
        return this.http.get<TeamsApiRequest>('https://free-nba.p.rapidapi.com/teams', { headers: this.apiOptions })
            .pipe(
                map(responseData => {
                return responseData
                })
            );
        }
}


