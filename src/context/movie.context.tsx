import React from "react";
import { I_Movies, I_ReqsParam,I_MovieDetails } from "../model/movies.interface";

export const MoviesContext = React.createContext<{
  MovieList: I_Movies[];
  updateMovies: Function,
  reqParam?: I_ReqsParam,
  updateParam?:any,
  movieDetails?:I_MovieDetails,
  updateMoviePanel?:any,
  closePanel?:any,
  openPanel?:any,
}>({
    MovieList: [],
    updateMovies: Function,
    // reqParam:{},
    // updateParam:null,
    // movieDetails:{
    //   poster:'',
    //   title:'',
    //   screenplay:0,
    //   synopsis:'',
    //   genres:[],
    //   lang:'',
    // },
    // changeMovieDetail:Function
  });

