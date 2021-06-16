interface Genre{
    id:number,
    name:string
}

export interface I_MovieDetails{
    backdrop_path:string
    genres:Genre[],
    original_language:string,
    overview:string,
    runtime:number,
    title:string,
}

export interface I_Movies{
    id:number,
    title:string,
    rating:number,
    poster?:string
}

export interface I_ReqsParam{
	page?:number
	"primary_release_date.gte"?:string
	"primary_release_date.lte"?:string
	sort_by?:string,
    "vote_count.gte"?:number,
}

