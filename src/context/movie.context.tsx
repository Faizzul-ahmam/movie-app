import React from "react";
import { Movies, ReqsParam } from "../model/movies.interface";

export const MoviesContext = React.createContext<{
  MovieList: Movies[];
  updateMovies: Function,
  reqParam?: ReqsParam,
  updateParam?:any
}>({
    MovieList: [],
    updateMovies: Function,
    reqParam:{},
    updateParam:null
  });

