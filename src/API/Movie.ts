import axios, { AxiosResponse } from 'axios';
import { mapResult } from '../helper/util';
import { Movies , ReqsParam } from "../model/movies.interface";

const BASE_URL = process.env.REACT_APP_MOVIE_LIST_URL
const API_KEY = process.env.REACT_APP_API_KEY


const instance = axios.create({
	baseURL: BASE_URL,
    params: {
		api_key: API_KEY
	},
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => mapResult(response.data.results)

const requests = {
	get: (url: string,parameters?:ReqsParam) => instance.get(url,{params:parameters}).then(responseBody)
	.catch((_) => {
		return [];
	  })
};

export const Movies_API = {
	getListOnTheater: (parameters?:ReqsParam): Promise<Movies[]> => requests.get('',parameters),
};
