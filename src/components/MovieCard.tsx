import '../style/MovieCard.scss'
import {imageList} from '../img'
import { MoviesContext } from '../context/movie.context'
import { useContext } from 'react'
import { I_Movies } from '../model/movies.interface';
import { Movies_API } from '../API/Movie';


export const MovieCard = ({id,poster,title,rating}:I_Movies) =>
{
    const {openPanel,updateMoviePanel} = useContext(MoviesContext)

    const fetchMovieDetail = (id:number) =>{
        
        Movies_API.getMovieDetail(id)
        .then((data) =>{
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
            <div className="movie-img" onClick={() => {fetchMovieDetail(id)}}>
                <img src={poster || imageList.movie_tmb} alt="" />
            </div>
            <div className="movie-title"><h4>{title}</h4></div>
        </div>
        );

}