import axios from 'axios'
import qs from 'qs'
// import { Loading } from 'element-ui'

axios.defaults.baseURL =
  process.env.NODE_ENV == 'development'
    // ? 'http://182.168.1.132:8144/api/tenant'asda
    ? ''
    : 'http://www.wis-longyun.com';
    // : 'http://192.168.1.97/merger-mobile' //动态配置网络请求不同环境下的地址
//西信测试环境
// axios.defaults.baseURL = 'http://manage.merger-link.cn/merger-mobile'
//97
// axios.defaults.baseURL = 'http://192.168.1.97/merger-mobile'
//正式环境
// axios.defaults.baseURL = 'http://m.merger-link.com/merger-mobile'
axios.defaults.withCredentials = true //让ajax携带cookie
localStorage.setItem('host', axios.defaults.baseURL);

// 请求拦截
let instance = axios.create();
// let requestList = new Set() // 存储请求url

instance.interceptors.request.use(
  (config) => {
    // 1. 这个位置就请求前最后的配置
    // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
    // config.headers['webClient'] = 1 // 后台要的
    // 利用cancelToken 取消当次请求
    // config.cancelToken = new axios.CancelToken(e => {
    //   // 在这里阻止重复请求，上个请求未完成时，相同的请求不会再次执行
    //   requestList.has(config.url)
    //     ? e(`${location.host}${config.url}---重复请求被中断`)
    //     : requestList.add(config.url)
    // })

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    // 相同请求不得在600毫秒内重复发送，反之继续执行
    // setTimeout(() => {
    //   requestList.delete(response.config.url)
    // }, 600)
    // 1. 根据自己项目需求定制自己的拦截
    // 2. 然后返回数据
    // 请求成功

    if (response.status == 200) {
      if (response.data.success == undefined) {
        return response.data
      } else {
        if (response.data.success) {
          return response.data
        } else {
          if (response.data.data == '4') {
            if (process.env.NODE_ENV == 'development') {
              location.href = '/login'
            } else {
              location.href = '#/login'
            }
            return false
          } else {
            return response.data
          }
        }
      }
    }
  },
  (error) => {
    console.log(error)
    // requestList = new Set()
    // 请求失败
    return false
  }
)

export default {
  get(url, params = {}) {
    //context vue 实例
    return new Promise((resolve, reject) => {
      // const _loading = Loading.service({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });
      instance
        .get(url, { params: params })
        .then((res) => {
          // _loading.close();
          if (res) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  post(url, params = {}, option = {}) {
    // if (userToken) {

    //   Object.assign(params, { userToken: userToken }); //合并两个对象

    // }
    return new Promise((resolve, reject) => {
      // const _loading = Loading.service({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // });

      instance
        .post(
          url,
          option['formData'] ? params : qs.stringify(params),
          option['blob'] ? { responseType: 'blob' } : null
        )
        .then((res) => {
          //序列化字符串
          // _loading.close();
          if (res) {
            resolve(res)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
}
