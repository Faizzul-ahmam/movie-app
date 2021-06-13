import { env } from "process";

type Details = {
    poster:string
    title:String,
    duration:number,
    synopsis:String,
    genres:Array<object>,
    lang:String,
}

export const Movie = ({poster,title,duration,synopsis,genres,lang}:Details) =>
<div className="movie">
    <div className="poster"></div>
    <div className="detail">
        <h3>{title}</h3>
        <div><h5>{duration}</h5>{lang}</div>
        <p>{synopsis}</p>
        {/* {genres.map(genre) =><p> {genre.name} </p>} */}
    </div>
    <div className="cta">
        <button>Book Now</button>
    </div>
</div>;
