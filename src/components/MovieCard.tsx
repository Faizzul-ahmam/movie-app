import '../style/MovieCard.scss'
import {imageList} from '../img'

type MovieDetail = {
    poster_src?:string,
    title:string,
    rating:number,
    popularity?:string
}

export const MovieCard = ({poster_src,title,rating,popularity}:MovieDetail) =>
{
    

    return(
        <div className="movie-card">
            <div className="movie-rating"><img src={imageList.star} alt=""/><h5>{rating.toFixed(1)}</h5></div>
            <div className="movie-img">
                <img src={poster_src || imageList.movie_tmb}/>
                <div></div>
            </div>
            <div className="movie-title"><h4>{title}</h4></div>
        </div>
        );

}