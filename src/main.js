import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
// import env from './env'

// mock 开关
const mock = false
if (mock) {
  require('./mock/api')
}

// 根据前端的跨域方式做调整 /a/b => /api/a/b
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000

// 根据环境变量获取不同请求地址
// axios.defaults.baseURL = env.baseURL

// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  const path = location.hash
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
