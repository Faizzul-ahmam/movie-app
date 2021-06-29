import { useEffect, useState } from 'react';
import './style/App.scss';
import Component from './components';
import { MoviesContext } from './context/movie.context';
import { I_Movies , I_ReqsParam, I_MovieDetails} from './model/movies.interface';
import { Movies_API } from './API/Movie';

const defaultParam = {
  page:1,
  "primary_release_date.gte":"2021-01-20",
  "primary_release_date.lte":"2021-08-14",
  sort_by:"primary_release_date.desc",
  "vote_count.gte":10
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
  }, []);

  useEffect(() => {
    if (isBottom) {
      let newPage = currentPage + 1
      setPage(newPage)
    }
  }, [isBottom]);

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
