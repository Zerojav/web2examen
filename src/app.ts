import { ITvShow, Iseason } from "./ITvShows";

const ITvShows = [
    {
        id: 1,
        name: "Rick and Morty",
        director: "Rick Sanchez",
        investment: 14,
        cast: "Rick Sanchez",
        season: {
            id: 1,
            description: "Rick and Morty's Second Season",
            episodesNumber: 12,
            tvShowId: 1
            }
    },
    {
        id: 2,
        name: "Dragon Ball Z",
        director: "Akira Toriyama",
        investment: 12,
        cast: "Voice's Actors of DBZ",
        season: {
            id: 2,
            description: "Dragon Ball's Sequel",
            episodesNumber: 225,
            tvShowId: 2,
        }
    },
    {
        id: 3,
        name: "Re:Zero Kara Hajimeru Isekai Seikatsu",
        director: "Tappei Nagatsuki",
        investment: 43,
        cast: "Voice's Actors of RZ",
        season: {
            id: 3,
            description: "First Season of Re:Zero",
            episodesNumber: 25,
            tvShowId: 3,
        }
    }
];



const getTvShows = (({ITvShows : Array¿}, id : number) =>{
    ITvShows.forEach(element => {
        console.log(element);
    });
});

getTvShows({ITvShows}, 2);
