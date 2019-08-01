# api-creater

使用：

```
npm i -S api-creater
```

示例：

```
import Vue from 'vue'
import app from '@app'
import api from 'api-creater'
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


// other vue component

{
  async mounted () {
    const res = await this.$request.get(...)
  }
}
```

如果不挂在到 vue 上，也可以直接引用:

```
import api from 'api-creater'

const apis = api.init({
  // 配置同上...
})

await apis.get(...)
```

如果有一些特殊的方法，可以这样调用：

```
await apis.use('some methods')('/api/xxx', {
  params: {}
})
```
