import { useContext, useEffect, useState } from 'react';
import '../style/MovieDetails.scss';
import { MoviesContext } from '../context/movie.context'
import { I_MovieDetails } from '../model/movies.interface';
const IMG_BASE_URL = process.env.REACT_APP_MOVIE_IMAGE_BASE_URL;


export const MovieDetail = ({backdrop_path,title,runtime,overview,genres,original_language}:I_MovieDetails) =>
{


    const {closePanel} = useContext(MoviesContext)
    const [timeInString,settimeInString] = useState('')

    useEffect(() => {
        runtimeInString()
      }, []);

    const runtimeInString = () => {

        let Hours = Math.floor(runtime /60).toFixed(0)
        let minutes = (runtime % 60).toFixed(0)

        settimeInString( Hours+' Hour '+minutes+' minutes')
    }

    return (<div className="movie" >
        <div onClick={closePanel}>Close</div>
        <div className="poster">
            <div className="detail">
                <div>
                    <img src={`${IMG_BASE_URL}w500/${backdrop_path}`}/>
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <h5>{timeInString}</h5>{original_language}
                    <p>{overview}</p>
                    <div>
                        {genres.map(genre =><div key={genre.id}> {genre.name} </div>)}
                    </div>
                    <div className="cta">
                        <button>Book Now</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>);

}
