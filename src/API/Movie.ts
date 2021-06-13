import axios, { AxiosResponse } from 'axios';
import { Movies_On_Theater } from '../model/movies.interface';

const BASE_URL = process.env.REACT_APP_MOVIE_LIST_URL
const API_KEY = process.env.REACT_APP_API_KEY


const instance = axios.create({
	baseURL: BASE_URL,
    params: {
        api_key: API_KEY
      },
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	get: (url: string) => instance.get(url).then(responseBody)
};

export const Movies_API = {
	getListOnTheater: (): Promise<Movies_On_Theater> => requests.get('/now_playing'),
};

// export const getMovieList = ():Promise<Movies[]> => {
//     return fetch('http://api.themoviedb.org/3/discover/movie?api_key=328c283cd27bd1877d9080ccb1604c91&primary_release_date.lte=2016-12-31&sort_by=release_date.desc&page=1')
//     .then(res => res.json())
//         .then(res => {
//             console.log(res)
//             return res as Movies[]
//         })
// }

// export const getMovieList = ():Promise<Response.> => {
//     return fetch(BASE_URL+'now_playing?api_key='+API_KEY)
//     .then(res => res.json())
//         .then(res => {
//             // console.log(res)
//             return res as Response
//         })
// }