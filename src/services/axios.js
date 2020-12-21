/**
 * @author 傅小凌 279811056#qq.com 
 * 
 * axios实例封装
 * 请求拦截器：interceptors.request
 * 返回拦截器：interceptors.response
 * 
 */
import axios from "axios"
import cookies from 'js-cookie'
import store from '@/store'

// 请求实例
const requestInstance = axios.create({
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
  baseURL: process.env.VUE_APP_HTTP_BASEURL,
  timeout: process.env.VUE_APP_HTTP_TIMEOUT * 1
})
// 添加请求拦截器
requestInstance.interceptors.request.use(config => {
  const token = cookies.get(process.env.VUE_APP_TOKEN_STOREAGENAME)
  if (token && JSON.parse(process.env.VUE_APP_AUTHORIZATION)) config.headers["Authorization"] = `Bearer ${token}`
  return config
}, error => {
  return Promise.reject(error)
})
// 添加响应拦截器
requestInstance.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
export default requestInstance