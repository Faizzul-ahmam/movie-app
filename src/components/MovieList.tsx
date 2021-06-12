
import { useEffect, useState } from 'react';
import { Response ,getMovieList} from '../API/Movie';
import {MovieCard} from './MovieCard'

// type ListofMovie = {
//     poster_src?:String,
//     title?:String,
//     Popularity?:String
// }

export const MovieList = () =>
{
    const [MovieDetail,setMovieDetail] = useState<Response['results'][]>([]);
    // console.clear()
    console.log('MovieDetail : ',MovieDetail?MovieDetail:"Empty")
    useEffect(()=>{
        console.log("Hey")
        const data = getMovieList()
        console.log(data)
    },[]);

    return(
    <div>
        Movie
        
        <MovieCard/>
    </div>);

}
