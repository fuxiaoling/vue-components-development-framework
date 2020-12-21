/**
 * @author 傅小凌 279811056#qq.com 
 * 
 */
export const defaultSetting = () => {
  const settings = require.context('./modules', true, /\/.*\.js$/)
  const result = Object.create(null)
  settings.keys().map(key => {
    Object.assign(result, settings(key).default)
  })
  return result
}