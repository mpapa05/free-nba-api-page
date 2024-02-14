import { Routes } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';

export const routes: Routes = [
    { path: 'games', component: GamesComponent },
    // { path: 'games/:id', component: GameDetailComponent },
    { path: 'players', component: PlayersComponent },
    // { path: 'players/:id', component: PlayerDetailComponent },
    { path: 'teams', component: TeamsComponent },
    // { path: 'teams/:id', component: TeamDetailComponent },
    { path: 'stats', component: StatsComponent },
];
