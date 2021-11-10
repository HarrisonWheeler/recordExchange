import { discogsApi } from './AxiosService'

class DiscogsService {
  async authenticate() {
    const requestToken = await discogsApi.get('https://api.discogs.com/database/search?q=tool', {
      headers: {
        Authorization: 'Discogs key=LFMxIMgQzupoHjvPiHUV, secret=dQIPTdOzvOrlAhmcSmohRtmJgUGSMZjH'
      }
    })
    return requestToken
  }
}

export const discogsService = new DiscogsService()
