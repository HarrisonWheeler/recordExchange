// import { discogsApi } from './AxiosService'

class DiscogsService {
  // REVIEW changing up how I'm handling this authorization - key and secret are needed with every request to the discogs api, so this functionality will be moved to the client. Leaving this service intact for now.
  // async authenticate() {
  //   const requestToken = await discogsApi.get('https://api.discogs.com/database/search?q=tool', {
  //     headers: {
  //       Authorization: 'Discogs key=LFMxIMgQzupoHjvPiHUV, secret=dQIPTdOzvOrlAhmcSmohRtmJgUGSMZjH'
  //     }
  //   })
  //   return requestToken
  // }
}

export const discogsService = new DiscogsService()
