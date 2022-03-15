import { useEffect, useState } from 'react';
import './style/App.scss';
import Component from './components';
import { MoviesContext } from './context/movie.context';
import { I_Movies , I_ReqsParam, I_MovieDetails} from './model/movies.interface';
import { Movies_API } from './API/Movie';

const defaultParam = {
  page:1,
  // "primary_release_date.lte":getReleaseDate('lte'),
  // "primary_release_date.gte":getReleaseDate('gte'),
  "primary_release_date.lte":getReleaseDate(),
  "primary_release_date.gte":getReleaseDate(true),
  sort_by:"primary_release_date.desc",
  "vote_count.gte":10
}

function getReleaseDate(lte=false)
{
  let today = new Date();
  let dateOffset = new Date(today.setDate( lte?today.getDate() - 200 : today.getDate() + 200))
  let date = dateOffset.getFullYear() +'-'+ ('0'+(dateOffset.getMonth() + 1)).slice(-2) +'-'+ ('0'+ dateOffset.getDate()).slice(-2);
  return date.toString()
}


function App() {
  const [MovieList,setMovieList] = useState<I_Movies[]>([])
  const [MovieDetail,setMovieDetail] = useState<I_MovieDetails>()
  const [MovieToggle,setMovieToggle] = useState(false)
  const [Params,setParams] = useState<I_ReqsParam>(defaultParam)
  const [isBottom, setIsBottom] = useState(false);
  const [currentPage,setcurrentPage] = useState(1)


  const handleScroll =()=> {
    const scrollTop = (document.documentElement
      && document.documentElement.scrollTop)
      || document.body.scrollTop;

    const scrollHeight = (document.documentElement
      && document.documentElement.scrollHeight)
      || document.body.scrollHeight;

    if (scrollTop + window.innerHeight + 50 >= scrollHeight){
      setIsBottom(!isBottom);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  useEffect(() => {
    if (isBottom) {
      //Call setPage to trigger API call to load next page.
      setPage(currentPage + 1)
    }
  }, [isBottom,currentPage]);

  useEffect(()=>{
    Movies_API.getListOnTheater(Params)
    .then((data) =>{
      
      setMovieList([...MovieList,...data])
    })
  },[Params.page]);

  useEffect(()=>{
    Movies_API.getListOnTheater(Params)
    .then((data) =>{
      setMovieList(data)
    })
  },[Params.sort_by]);

  const setPage = (newPage:number) =>{
    setcurrentPage(newPage)
    setParams({...Params,page:newPage})
    setIsBottom(false);
  }

  const changeSortBy = (sort:string) =>{
    setcurrentPage(1)
    setParams({...Params,page:1,sort_by:sort})
  }

  const closeMoviePage = () =>{
    document.body.style.overflow = 'visible'
    setMovieToggle(false)
  }

  const openMoviePage = ()=>{
    document.body.style.overflow = 'hidden'
    setMovieToggle(true)
  }

  return (
   
        <MoviesContext.Provider 
          value={{MovieList, 
            updateMovies:setMovieList, 
            reqParam:Params, 
            updateParam:changeSortBy,
            movieDetails:MovieDetail,
            updateMoviePanel:setMovieDetail,
            closePanel:closeMoviePage,
            openPanel:openMoviePage
          }}>
            
            {MovieToggle && MovieDetail?<Component.MovieDetail
              backdrop_path={MovieDetail.backdrop_path}
              title={MovieDetail.title}
              runtime={MovieDetail?.runtime}
              overview={MovieDetail?.overview}
              genres = {MovieDetail?.genres}
              original_language={MovieDetail?.original_language}
            />:<div></div>}
            
            <div className="main-container">
              <Component.Nav/>
              <Component.MovieList/>
            </div>
        </MoviesContext.Provider>
 
  );
}

export default App;
