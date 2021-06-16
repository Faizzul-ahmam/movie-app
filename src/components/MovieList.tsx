
import { useContext } from 'react'
import {MovieCard} from './MovieCard'
import { MoviesContext } from '../context/movie.context'
import { Filter } from './Filter'


export const MovieList = () =>
{   
    const {MovieList} = useContext(MoviesContext)

    console.log('Movies : ',MovieList?MovieList:"Empty")
    


    return(
    <>
        <div style={{paddingTop:40, paddingBottom:20}}>
            <h2 style={{textAlign:'left'}}>Movies on theater</h2>
            <Filter/>
        </div>
        <div className="flex"  >
            {MovieList?MovieList.map((movie) =>(
                                // <div className="flex-wrap" key={movie.id}>
                                    <MovieCard key={movie.id}
                                        poster_src={movie.poster}
                                        title={movie.title}
                                        rating={movie.rating}
                                    />
                                // </div>
                                ))
                
                                :
                
                <div className="flex"><h2>Loading ...</h2> </div>
             }
            
        </div>
    </>
        )

}
