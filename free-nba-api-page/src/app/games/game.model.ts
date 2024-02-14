export interface GamesApiRequest {
    data: Game[];
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

export interface Meta {
    current_page: number;
    next_page: number;
    per_page: number;
}