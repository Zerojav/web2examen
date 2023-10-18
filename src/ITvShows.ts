export interface ITvShow{
    id: number;
    name: string;
    director: string;
    investment: number;
    cast: string;
    season: Iseason[];
}

export interface Iseason{
    id: number;
    description: string;
    episodesNumber: number;
    tvShowId: number;
}