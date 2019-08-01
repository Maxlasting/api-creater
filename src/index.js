import axios from 'axios'

const apiCreater = (options) => {
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
  return {
    get: async (...args) => createRequest(request.get(...args)),
    put: async (...args) => createRequest(request.put(...args)),
    post: async (...args) => createRequest(request.post(...args)),
    delete: async (...args) => createRequest(request.delete(...args)),
    use: (methods) => async (...args) => createRequest(request[methods](...args))
  }
}

export default {
  install (Vue, options = {}) {
    Vue.prototype.$request = apiCreater(options)
  },
  init: apiCreater
}
