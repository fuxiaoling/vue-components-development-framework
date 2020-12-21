/**
 * @author 傅小凌 279811056#qq.com 
 * 
 */
export const modules = () => {
  const modulesFiles = require.context('./modules', true, /\/.*\.js$/)
  return modulesFiles.keys().reduce((tempArr, modulePath) => {
    tempArr = [...tempArr, ...modulesFiles(modulePath).default]
    return tempArr
  }, [])
}
