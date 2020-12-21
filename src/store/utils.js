/**
 * @author 傅小凌 279811056#qq.com 
 * 
 */

export const modules = () => {
  const modulesFiles = require.context('./modules', true, /\/.*\.js$/)
  return modulesFiles.keys().reduce((tempObj, modulePath) => {
    tempObj[modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')] = modulesFiles(modulePath).default
    return tempObj
  }, {})
}

export const plugins = () => {
  const pluginsFiles = require.context('./plugins', true, /\/.*\.js$/)
  return pluginsFiles.keys().reduce((tempArr, pluginPath) => {
    tempArr.push(pluginsFiles(pluginPath).default)
    return tempArr
  }, [])
}

export const replaceLink = link => {
  const domain = process.env.VUE_APP_DOMAIN
  const originalDomain = process.env.VUE_APP_DATA_ORIGINAL_DOMAIN
  if (domain === originalDomain) {
    return link
  } else {
    if (link.startsWith(originalDomain)) {
      const hash = link.split(originalDomain)[1]
      if (hash) {
        const joiner = process.env.VUE_APP_ROUTE_MODE === 'hash' ? '#/' : ''
        link = `${domain}${joiner}${hash}`
      } else {
        link = `${domain}`
      }
    }
    return link
  }
}