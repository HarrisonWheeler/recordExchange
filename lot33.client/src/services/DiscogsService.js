import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { discogsApi } from "./AxiosService";

class DiscogsService{

async search(query){
  logger.log('query in service before api call', query)
  const res = await discogsApi.get(`/database/search?q=${query}`, {
    headers: {
      Authorization: 'Discogs key=LFMxIMgQzupoHjvPiHUV, secret=dQIPTdOzvOrlAhmcSmohRtmJgUGSMZjH'
    }
  })
  logger.log('search res', res)
  AppState.searchResults = res.data.results
}

}

export const discogsService = new DiscogsService();
