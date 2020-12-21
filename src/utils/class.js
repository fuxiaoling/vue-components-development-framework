/**
 * 检查HTML节点对象是否包含某个样式
 * @param {HTMLElement} element HTML节点对象
 * @param {string} className 需要检查存在的样式类名
 * @returns {boolean}
 */
export const hasClass = (element, className) => {
  return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

/**
 * 增加HTML节点对象样式
 * @param {HTMLElement} element
 * @param {String} className
 */
export const addClass = (element, className) => {
  if (!hasClass(element, className)) element.className += ' ' + className
}

/**
 * 删除HTML节点对象样式
 * @param {HTMLElement} element
 * @param {String} className
 */
export const removeClass = (element, className) => {
  if (hasClass(element, className)) {
    const reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    element.className = element.className.replace(reg, ' ')
  }
}

/**
 * HTML节点增加/删除样式
 * @param {HTMLElement} element HTML节点对象
 * @param {String} className 需要增加删除的样式类名
 */
export const toggleClass = (element, className) => {
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length)
  }
  element.className = classString
}
