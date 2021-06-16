import React, { useContext, useEffect, useState } from 'react';
import './style/App.scss';
import Component from './components';
import { MoviesContext } from './context/movie.context';
import { Movies , ReqsParam} from './model/movies.interface';
import { Movies_API } from './API/movie';
import useScrollPosition from '@react-hook/window-scroll'

const defaultParam = {
  page:1,
  "primary_release_date.gte":"2021-04-20",
  "primary_release_date.lte":"2021-07-14",
  sort_by:"primary_release_date.desc",
  "vote_count.gte":90
}

function App() {
  const scrollY = useScrollPosition(60)
  const [MovieList,setMovieList] = useState<Movies[]>([])
  const [Params,setParams] = useState<ReqsParam>(defaultParam)
  
  // setParams(defaultParam)
  useEffect(()=>{
    console.log("Trigger by page")
    Movies_API.getListOnTheater(Params)
    .then((data) =>{
      
      setMovieList([...MovieList,...data])
    })
  },[Params.page]);

  useEffect(()=>{
    console.log("Trigger by sort change")
    console.log("After : ",Params)
    Movies_API.getListOnTheater(Params)
    .then((data) =>{
      setMovieList(data)
    })
  },[Params.sort_by]);

  const changeSortBy = (sort:string) =>{
    console.log("Before : ",Params)
    setParams({...Params,sort_by:sort})
    
  }

  return (
    <MoviesContext.Provider value={{MovieList, updateMovies:setMovieList, reqParam:Params, updateParam:changeSortBy}}>
      <div style={{position:'fixed'}}>scroll pos: {scrollY}</div>
      <div className="main-container">
        <Component.Nav/>
        <Component.MovieList/>
      </div>
    </MoviesContext.Provider>
  );
}

export default App;
