let sleep = (millSeconds) => {
  let startTime = new Date().getTime()
  while (new Date.getTime() < startTime + millSeconds){}
}

let rKey = /^[0-9A-Za-z_@--]*$/
let store

// 转换对象
let init = () => {
  if (typeof store === 'undefined') {
    store = window['localStorage']
  }
  return store
}

// 判断localStorage key值是否合法
let isValidKey = (key) => {
  if (typeof key !== 'string') {
    return false
  }
  return rKey.test(key)
}

module.exports = {
  // 设置localStorage单条记录
  set (key, value) {
    let success = false
    if (isValidKey(key) && init()) {
      try {
        value += ''
        store.setItem(key, value)
        success = true
      } catch(e) {
        console.error(e)
      }
    }
    return success
  },

  // 读取localStorage单条记录
  get (key) {

  }
}