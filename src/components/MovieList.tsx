
import { useEffect, useState } from 'react'
import { Movies_API } from '../API/movie'
import {MovieCard} from './MovieCard'
import {Movies_On_Theater} from '../model/movies.interface'


export const MovieList = () =>
{
    const [Movies,setMovies] = useState<Movies_On_Theater>();
    // console.clear()
    console.log('MovieDetail : ',Movies?Movies:"Empty")
    
    useEffect(()=>{
        Movies_API.getListOnTheater()
        .then((data) =>{
            setMovies(data)
        })
        return () =>{}
    },[]);

    return(
    <>
        <div>
            Movies on theater
            {
                Movies? 
                (
                    Movies.results.map(movie =>(
                                    <div key={movie.id}>
                                        <MovieCard 
                                            poster_src={movie.poster_path}
                                            title={movie.title}
                                        />
                                    </div>
                                    ))
                )
                :
                ( 
                    <div>No Movie</div>
                )
                
            }
            
        </div>
    </>
        )

}
