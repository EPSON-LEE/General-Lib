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
  debugger
  var context = context || window
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