/**
 * @author 傅小凌 279811056#qq.com 
 * 
 * state备份恢复插件
 * 获得token的Action执行前恢复state数据，在排除指定的Mutations方法后备份state数据
 * 
 */
import cookies from 'js-cookie'
const config = {
  storageName: 'FXL_RESUME_STATE',
  actionTrigger: ['GetToken'],
  excludeMutations: []
}
export default store => {
  const { storageName, actionTrigger, excludeMutations} = config
  store.subscribeAction({
    before: action => {
      if (actionTrigger.length === 0 || actionTrigger.includes(action.type)) {
        console.log('restore state')
        const backupState = sessionStorage.getItem(storageName)
        if (backupState) {
          const parseState = JSON.parse(backupState)
          store.replaceState(parseState)
          cookies.set(process.env.VUE_APP_TOKEN_STOREAGENAME, parseState.token)
        }
      }
    }
  })
  store.subscribe((mutation, state) => {
    if (!excludeMutations.includes(mutation.type)) {
      sessionStorage.setItem(storageName, JSON.stringify(state))
    }
  })
}