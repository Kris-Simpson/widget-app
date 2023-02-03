import axios from 'axios'

class Api {
  static cptCodes() {
    return axios.get('api/v1/cpt_codes')
  }

  static offices(cptCode) {
    return axios.get('api/v1/offices', {
      params: {
        cpt_code: cptCode
      }
    })
  }
}

export default Api