
type MovieDetail = {
    poster_src?:String,
    title?:String,
    popularity?:String
}

export const MovieCard = ({poster_src,title,popularity}:MovieDetail) =>
{
    const IMG_BASE_URL = process.env.REACT_APP_MOVIE_IMAGE_BASE_URL

    return(
    <div>
        <img src={IMG_BASE_URL+'w200/'+poster_src}></img>
        <h3>{title}</h3>
    </div>);

}