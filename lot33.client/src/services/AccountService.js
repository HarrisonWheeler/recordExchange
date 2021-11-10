import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  // TODO move this to the server

  // async authenticateDiscogs(){
  //   try {
  //     const res = await discogsApi.get('https://www.discogs.com/oauth/authorize')
  //     logger.log('discogs authenticate res', res)
  //   } catch (error) {
  //     logger.log('Unable to authenticate with Discogs', error)
  //   }
  // }
}

export const accountService = new AccountService()
