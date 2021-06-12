interface Movies{
    id:number,
    title:String,
    popularity:number
}

export interface Response{
    page:number,
    results:Movies,
    total_pages:number,
    total_results:number
}

// export const getMovieList = ():Promise<Movies[]> => {
//     return fetch('http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1')
//     .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             return res as Movies[]
//         })
// }

export const getMovieList = ():Promise<Movies[]> => {
    return fetch('http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1')
    .then(res => res.json())
        .then(res => {
            console.log(res.results)
            return res.results as Movies[]
        })
}