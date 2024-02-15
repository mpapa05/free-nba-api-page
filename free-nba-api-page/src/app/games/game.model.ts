export interface GamesApiRequest {
    data: Game[];
    meta: Meta;
}

export interface TeamsApiRequest {
    data: Team[];
    meta: Meta;
}

export interface StatsApiRequest {
    data: Stats[];
    meta: Meta;
}

export interface PlayersApiRequest {
    data: Stats[];
    meta: Meta;
}

export interface Game {
    id: number
    date: string;
    home_team_score: number;
    visitor_team_score: number;
    period: number;
    postseason: boolean;
    season: number;
    status: string;
    time: string;
    home_team: Team;
    visitor_team: Team;
}

export interface Team {
    id: number;
    name: string;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
}

export interface Stats {
    id: number;
    ast: number;
    blk: number;
    dreb: number;
    fg3_pct: number;
    fg3a: number;
    fg3m: number;
    fg_pct: number;
    fga: number;
    fgm: number;
    ft_pct: number;
    fta: number;
    ftm: number;
    game: Game;
    min: string;
    oreb: number;
    pf: number;
    player: Player;
    pts: number;
    reb: number;
    stl: number;
    team: Team;
    turnover: number;
}

export interface Meta {
    current_page: number;
    next_page: number;
    per_page: number;
}

export interface Player {
    id: number;
    first_name: string;
    height_feet: number;
    height_inches: number;
    last_name: string;
    position: string;
    team: Team;
    weight_pounds: number;
}