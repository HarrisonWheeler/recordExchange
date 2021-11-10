import Axios from 'axios'

export const discogsApi = Axios.create({
  timeout: 8000
})

class AxiosService {

}

export const axiosService = new AxiosService()
