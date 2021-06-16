export interface Movies{
    id:number,
    title:string,
    popularity:number,
    rating:number,
    poster?:string
}

export interface ReqsParam{
	page?:number
	"primary_release_date.gte"?:string
	"primary_release_date.lte"?:string
	sort_by?:string,
    "vote_count.gte"?:number,
}

