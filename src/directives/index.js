const directivesFiles = require.context('./', true, /index\.js$/)
export default directivesFiles.keys().reduce((tempArr, directivePath) => {
  const item = directivesFiles(directivePath).default
  if (item && item.install) tempArr.push(item)
  return tempArr
}, [])
