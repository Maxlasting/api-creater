import axios from 'axios'

export default {
  install (Vue, options = {}) {
    const { baseOptions = {}, interceptors = {}, errCatcher = (err) => console.error(err) } = options
    const request = axios.create(baseOptions)
    if (interceptors.request) {
      const { callback, errHandler = () => {} } = interceptors.request
      request.interceptors.request.use(callback, errHandler)
    }
    if (interceptors.response) {
      const { callback, errHandler = () => {} } = interceptors.response
      request.interceptors.response.use(callback, errHandler)
    }
    const createRequest = (request) => new Promise((resolve, reject) => {
      request.then((res) => resolve(res.data)).catch(err => {
        errCatcher && errCatcher(err)
        reject(err)
      })
    })
    Vue.prototype.$api = {
      get: async (url, params = {}, options = {}) => createRequest(
        request.get(url, { params, ...options })
      ),
      delete: async (url, params = {}, options = {}) => createRequest(
        request.delete(url, { params, ...options })
      ),
      post: async (url, data = {}, options = {}) => createRequest(
        request.post(url, data, options)
      ),
      put: async (url, data = {}, options = {}) => createRequest(
        request.put(url, data, options)
      ),
    }
  }
}