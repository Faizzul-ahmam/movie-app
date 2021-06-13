interface Movies{
    id:number,
    title:String,
    popularity:number,
    poster_path:String
}

export interface Movies_On_Theater{
    page:number,
    results:Movies[],
    total_pages:number,
    total_results:number
}