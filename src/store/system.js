import services from '@/services'
import cookies from 'js-cookie'
const state = {
  token: '',
  selfEvaluation: {}
}
const getters = {
  selfEvaluation: state => state.selfEvaluation
}
const actions = {
  /** 获取并存储Token */
  GetToken ({ commit, state }, payload = {}) {
    return new Promise((resolve, reject) => {
      const token = cookies.get(process.env.VUE_APP_TOKEN_STOREAGENAME)
      if (state.token || token) {
        if (!token) cookies.set(process.env.VUE_APP_TOKEN_STOREAGENAME, state.token)
        resolve()
      } else {
        services.fetch('getToken', payload).then(res => {
          const { statusCode, success, data: { token } } = res.data
          if (statusCode === 200 && success === true) {
            commit("SetToken", token)
            cookies.set(process.env.VUE_APP_TOKEN_STOREAGENAME, state.token)
            resolve()
          } else {
            reject()
            throw new Error('获取token失败')
          }
        }).catch(err => {
          reject()
          throw new Error(err)
        })
      }
    })
  },
  /** 获取简历内容 */
  GetResume ({ commit, state }, payload = {}) {
    return new Promise((resolve, reject) => {
      const { params: { slug } } = payload
      if (slug && Object.keys(state.selfEvaluation).length > 0) {
        resolve([state.selfEvaluation])
      } else {
        services.fetch('getPages', payload).then(response => {
          let { data } = response
          if (Object.prototype.toString.call(data) === "[object Object]") data = [data]
          if (Array.isArray(data) && data.length > 0) {
            const list = data.reduce((result, item) => {
              const { id, date, modified, slug, status, type, title: { rendered: title }, content: { rendered: content, protected: needPassWord } } = item
              result.push({ id, date, modified, slug, status, type, title, content, needPassWord })
              return result
            }, [])
            commit("SetResume", list[0])
            resolve(list)
          } else {
            resolve([])
          }
        }).catch(err => {
          reject()
          throw new Error(err)
        })
      }
    })
  } 
}
const mutations = {
  SetToken (state, token) {
    state.token = token
  },
  SetResume (state, selfEvaluation) {
    if (state.selfEvaluation.content && !selfEvaluation.content) return
    state.selfEvaluation = selfEvaluation
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}