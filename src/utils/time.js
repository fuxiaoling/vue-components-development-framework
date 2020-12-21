/**
 * 获取最近指定天数的时间
 * @param {Number} days 需要获取的最近天数
 * @returns {Date} Timestamp 时间戳
 */
export const getLastTime = (days = 1) => {
  return new Date().getTime() - 3600 * 1000 * 24 * days
}
/**
 * 格式化时间戳
 * @param {Object|String|Number} time
 * @param {String} format
 * @returns {string | null}
 */
export const parseTime = (time = new Date().getTime(), format = '{y}-{m}-{d} {h}:{i}:{s}') => {
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        time = parseInt(time)
      } else {
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  return format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    return key === 'a'
      ? ['日', '一', '二', '三', '四', '五', '六'][value]
      : value.toString().padStart(2, '0')
  })
}