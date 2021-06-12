
type MovieDetail = {
    poster_src?:String,
    title?:String,
    popularity?:String
}

export const MovieCard = ({poster_src,title,popularity}:MovieDetail) =>
<div>
    This is Movie Card
    <img ></img>
    <h3>{title}</h3>
</div>