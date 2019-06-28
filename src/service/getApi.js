import service from './service'
import { apiPath } from './api'

export default {
  fetchData(){
    return service.get(apiPath.fetchData, v => {
      console.log(v)
    })
  },
  getRoles(){
    return service.get(apiPath.roles, v => {
      console.log(v)
    })
  }
}