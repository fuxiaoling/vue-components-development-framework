import apis from './../apis'
export default {
  /** 获取Token */
  getToken: {
    method: 'post',
    url: apis.getToken,
    data: {},
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    }
  },
  /** 获取pages */
  getPages: {
    method: 'get',
    url: apis.getPages
  }
}