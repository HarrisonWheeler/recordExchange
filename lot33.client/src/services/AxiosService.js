import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})

// REVIEW move this to the server

// export const discogsApi = Axios.create({
//   discogsUrl,
//   timeout: 8000
// })
