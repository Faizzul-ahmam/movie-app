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
    const toClosePanel =(event:any) =>
    {
        event.preventDefault();
        if(event.target === event.currentTarget){
            closePanel()
        }
    }

    const openButtonLink = ()=>{
        window.open('https://www.cathaycineplexes.com.sg/', "_blank"); 
    }
    return (<div className="movie" onClick={toClosePanel}>
        <div className="poster">
            <div className="detail">
                <div>
                    <img src={`${IMG_BASE_URL}original/${backdrop_path}`}/>
                </div>
                <div className="info">
                    <h1>{title}</h1>
                    <div className='i-1'><h5>{timeInString}</h5>&nbsp;&nbsp;&nbsp;<div className="lang">{original_language}</div></div>
                    <p>{overview}</p>
                    <div className="genres">
                        {genres.map(genre =><div className="genre" key={genre.id}>{genre.name}</div>)}
                    </div>
                    <div className="cta">
                        <button onClick={openButtonLink}>Book Now</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>);

}
