const pluginsFiles = require.context('./', true, /index\.js$/)
export default pluginsFiles.keys().reduce((tempArr, pluginPath) => {
  const item = pluginsFiles(pluginPath).default
  if (item && item.install) tempArr.push(item)
  return tempArr
}, [])
