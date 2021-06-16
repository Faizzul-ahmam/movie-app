import '../style/MovieCard.scss'
import {imageList} from '../img'
import { MoviesContext } from '../context/movie.context'
import { useContext } from 'react'
import { I_Movies } from '../model/movies.interface';
import { Movies_API } from '../API/movie';


export const MovieCard = ({id,poster,title,rating}:I_Movies) =>
{
    const {openPanel,updateMoviePanel} = useContext(MoviesContext)

    const fetchData = (id:number) =>{
        console.log("fetch Data: ",id)
        Movies_API.getMovieDetail(id)
        .then((data) =>{
            console.log(data)
            updateMoviePanel(data)
          })
        .then(()=>openPanel())        
    }
    return(
        <div className="movie-card">
            <div className="movie-rating">
                <img src={imageList.star} alt=""/>
                <h5>{rating.toFixed(1)}</h5>
            </div>
            <div className="movie-img" onClick={() => {fetchData(id)}}>
                <img src={poster || imageList.movie_tmb} />
            </div>
            <div className="movie-title"><h4>{title}</h4></div>
        </div>
        );

}