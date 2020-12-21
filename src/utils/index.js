
/**
 * 判断当前浏览器是否为IE
 * @returns {Boolean}
 */
export const isIE = () => {
  return window.navigator.userAgent.includes('MSIE') || 'ActiveXObject' in window
}

/**
 * 根据格式生成UUID
 * @param {String} str x与-组成的字符串
 * @returns {String} 唯一UUID
 */
export const genUUID = (str = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx') => {
  const preciseTimestamp = new Date().getTime() + window.performance.timeOrigin
  return str.replace(/[xy]/g, x => {
    const random = (preciseTimestamp + Math.random() * 0x10) % 0x10 | 0
    return (x.toLowerCase() === 'x' ? random : (random & 0x3 | 0x8)).toString(0x10)
  })
}

/**
 * 获取URL中的某个请求参数
 * @param {String} paramStr URL中请求参名称
 * @param {String} url
 * @returns {String}
 */
export const getURLParam = (paramName, url = window.location.href) => {
  let result = null
  paramName = paramName.toLowerCase()
  url = url.toLowerCase()
  if (url.includes('?')) {
    const paramsArr = url.split('?')[1].split('&')
    for ( let param of paramsArr) {
      if (param.startWith(paramName.toLowerCase())) {
        result = param.split('=')[1]
        break
      }
    }
  }
  return result
}

/**
 * 将URL中的请求参转为对象输出
 * @param {String} url
 * @returns {Object}
 */
export const convertURLParams2Object = (url = window.location.href) => {
  const result = Object.create(null)
  url.substring(url.lastIndexOf('?') + 1).replace(/([^?&=]+)=([^?&=]*)/g, (params, $1, $2) => {
    const name = decodeURIComponent($1)
    Reflect.set(result, name, String(decodeURIComponent($2)))
    return params
  })
  return result
}

/**
 * 函数防抖
 * @param {Function} func 函数对象
 * @param {Number} delay 延迟时间
 * @param {Boolean} immediate 是否即时执行
 * @return {Function}
 */
export const debounce = (fn, delay = 100, immediate = true) => {
  let timer = null
  return function(...args) {
    const ctx = this
    clearTimeout(timer)
    if (immediate) {
      fn.apply(ctx, args)
    } else {
      timer = setTimeout(function () {
        fn.apply(ctx, args)
      }, delay)
    }
  }
}

/**
 * 函数节流
 * @param {Function} func 函数对象
 * @param {Number} delay 延迟时间
 * @return {Function}
 */
export const throttle = (fn, delay = 100) => {
  let timer = null
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        fn()
        timer = null
      }, delay)
    }
  }
}

/**
 * F12 console面板打印文字
 */
export const screenText = () => {
  const text = `
  ██████  ██   ██  ██            ███████  ██      ███████  ███████
  ██       ██ ██   ██            ██   ██  ██      ██   ██  ██
  ██████    ███    ██            █████    ██      ██   ██  ██ ████
  ██       ██ ██   ██            ██   ██  ██      ██   ██  ██   ██
  ██      ██   ██  ██████   ██   ███████  ██████  ███████  ███████
                
  \t\t\t\t\t`
  console.log(`%c${text}`, 'color: #F00')
  console.log(`%c  blog.fuxiaoling.com`, 'color: #F00')
}
