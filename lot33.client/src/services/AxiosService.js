import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const discogsApi = Axios.create({
  baseURL: 'https://api.discogs.com/',
  timeout: 8000
})
