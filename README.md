# api-creater

使用：

```
npm i -S api-creater
```

示例：

```
import Vue from 'vue'
import app from '@app'
import api from 'api'
import { message } from 'element-ui'

Vue.config.productionTip = false

Vue.use(api, {
  baseOptions: {
    baseURL: 'http://localhost:8766/'
  },
  interceptors: {
    request: {
      callback: (config) => {
        // do something ...
        return config
      },
      errHandler: (err) => {
        return Promise.reject(err)
      }
    },
    response: {
      callback: (config) => {
        // do something ...
        return config
      },
      errHandler: (err) => {
        return Promise.reject(err)
      }
    }
  },
  errCatcher (err) {
    message({
      msg: '请求错误!'
    })
  }
})

new Vue({
  el: '#root',
  render: h => h(app)
})
```
