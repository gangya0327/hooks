import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from 'vuex'
import getToken from '@utils/auth'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASW_API, // base_url+request_url
  /*  withCredentials的情况下，后端要设置Access-Control-Allow-Origin为你的源地址
  Access-Control-Allow-Origin设置为*时cookie不会出现在http的请求头里 */
  // withCredentials: true,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['x-token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5000
      })
      if (res.code === 500 || res.code === 501 || res.code === 502) {
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Relogin',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error)
    Message({
      message: error.message,
      type: 'error',
      duration: 5000
    })
    return Promise.reject(error)
  }
)

export default service
