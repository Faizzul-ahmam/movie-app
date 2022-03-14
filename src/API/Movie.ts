import axios, { AxiosResponse } from 'axios';
import { mapResult } from '../helper/util';
import { I_Movies , I_ReqsParam, I_MovieDetails } from "../model/movies.interface";

const BASE_URL = process.env.REACT_APP_MOVIE_LIST_URL
const API_KEY = process.env.REACT_APP_API_KEY


const instance_discover = axios.create({
	baseURL: BASE_URL,
    params: {
		api_key: API_KEY
	},
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => mapResult(response.data.results)

const requests = {
	get: (url: string,parameters?:I_ReqsParam) => instance_discover.get(url,{params:parameters})
	.then(responseBody)
	.catch((_) => {
		return [];
	  })
};

export const Movies_API = {
	getListOnTheater: (parameters?:I_ReqsParam): Promise<I_Movies[]> => requests.get('discover/movie',parameters),
	
	getMovieDetail: (id:number): Promise<I_MovieDetails> => 
		instance_discover.get('movie/'+id)
		.then((response:AxiosResponse) => response.data)
		.catch((_) => {
			return {};
		})

};
