/**
 * @author 傅小凌 279811056#qq.com 
 * 
 * HTTP请求服务类
 * 
 */
import axiosInstance from './axios'
import { defaultSetting } from './utils'

const parameterDirectiveProcessor = Symbol.for('parameterDirectiveProcessor')
const responseConverter = Symbol.for('responseConverter')
class Services {
  constructor () {
    Object.assign(this, {
      defaultSetting,
      action: null
    })
  }
  fetch (action, setting) {
    this.action = action
    const params = this[parameterDirectiveProcessor](this.defaultSetting()[action], setting)
    console.log('[fetch]', action, params)
    return new Promise((resolve, reject) => {
      axiosInstance.request(params).then(response => {
        resolve(this[responseConverter](response))
      }).catch(error => {
        reject(error)
      })
    })
  }
  [parameterDirectiveProcessor] (defaultSetting, { pathParams = {}, params = {}, data = {}, headers = {} }) {
    let { url, params: defaultParams = {}, data: defaultData = {}, headers: defaultHeaders = {}, ...properties } = defaultSetting
    return {
      ...properties,
      url: (url => {
        for (let item of Object.values(pathParams)) url += `/${item}`
        return url
      })(url),
      params: Object.assign(params, defaultParams),
      data: typeof data === 'string' || typeof defaultData === 'string' ? (data || defaultData) : Object.assign(data, defaultData),
      headers: Object.assign(headers, defaultHeaders)
    }
  }
  [responseConverter] (data) {
    return data
  }
}
export default new Services()