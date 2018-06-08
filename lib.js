let sleep = (millSeconds) => {
  let startTime = new Date().getTime()
  while (new Date.getTime() < startTime + millSeconds){}
}

/**
 * test case
 * 模拟call的实现
 * 1. 函数设为对象属性
 * 2. 执行该函数
 * 3. 删除该函数
*/

Function.prototype.imitateCall = function (context) {
  var context = Object(context) || window
  var arg = []
  context.fn = this
  for(var i = 1; len=arguments.length, i<len; i++) {
    arg.push('arguments[' + i + ']')
  }
  var result = eval('context.fn(' + arg + ')')
  delete context.fn
  return result
}

/**
 * test case
 * 模拟Apply的实现
 * 接受一个this对象和一个数组
*/

Function.prototype.imitateApply = function (context, arr) {
  var context = Object(context) || window
      context.fn = this

  var result
  if (arr) {

  } else {
    var args = []
    for(var i = 1; len=arguments.length, i<len; i++) {
      arg.push('arguments[' + i + ']')
    }
    result = eval('context.fn(' + arg + ')')
  }
  delete context.fn
  return result
}

/**
 * test case
 * 模拟关键字 new实现了什么
 * 
 * 1、 访问构造函数里的属性
 * 2、 访问到Otaku.prototype中的属性
 * 3、 实例的__proto__属性会指向构造函数的prototype, 实例可以访问原型上的属性
 * 4、 针对有返回值的
 */

 function objectFactory() {
   var obj = new Object()
   Constructor = [].shift.call(arguments)
   obj.__proto__ = Constructor.prototype
   var ret = Constructor.apply(obj, arguments)
   return ret
 }

 /**
  * debounce
  */

 function debounce(func, time, immediate) {
  var timeout,
      result
  var debounced = function() {
    var context = this
    var args = arguments

    // 立即执行 随后消除抖动
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      var callNow = !timeout
      timeout = setTimeout(function(){
        timeout = null
      }, time)
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(function() {
        func.apply(context, args)
      }, time)
    }
    return debounced
  }

  debounced.cancel = function() {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}