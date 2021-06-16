import { useEffect, useState } from 'react';
import './style/App.scss';
import Component from './components';
import { MoviesContext } from './context/movie.context';
import { I_Movies , I_ReqsParam, I_MovieDetails} from './model/movies.interface';
import { Movies_API } from './API/movie';

const defaultParam = {
  page:1,
  "primary_release_date.gte":"2021-01-20",
  "primary_release_date.lte":"2021-07-14",
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
      console.log("Kat Bawah")
      let newPage = currentPage + 1
      setPage(newPage)
      console.log(currentPage)
    }
  }, [isBottom]);


  useEffect(()=>{
    console.log("Trigger by page")
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
    setParams({...Params,sort_by:sort})
  }

  const closeMoviePage = () =>{
    setMovieToggle(false)
  }

  const openMoviePage = ()=>{
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
