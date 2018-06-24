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

function testCall () {
  this.name = 1
  console.error(this.name)
}

let a = {
  'name': 1
}

testCall.apply(a)

/**
 * test case
 * 模拟Apply的实现
 * 接受一个this对象和一个数组
*/

Function.prototype.imitateApply = function (context, arr) {
  var context = context || window
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
  * debounce 防抖
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

 /**
  * isEmptyObject
  */
  function isEmptyObject(obj){

    var name

    for (name in obj) {
      return false
    }

    return true
  }

  /**
   * console.log(isEmptyObject({})); // true
   * console.log(isEmptyObject([])); // true
   * console.log(isEmptyObject(null)); // true
   * console.log(isEmptyObject(undefined)); // true
   * console.log(isEmptyObject(1)); // true
   * console.log(isEmptyObject('')); // true
   * console.log(isEmptyObject(true)); // true
   */


   /**
    * 判断是不是Dom元素
    */
    function isElement(obj) {
     return !!(obj && obj.nodeType === 1)
   }

   /**
    * 判断是不是window对象
    */

    function isWindow(obj) {
      return obj != null && obj === obj.window
    }

    /**
     * Array的原生方法可以用来处理类似数组行为的对象
     */

    function test() {
      console.error([].slice.call(arguments, 1))
      console.error(arguments)
    }

    /**
     * bubble sort
     * arr = [10,7,6,7,9,8,7,10,12]
     */

    function bubbleSort (arr) {
      let len = arr.length
      for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
          if (arr[j] > arr[j+1]) {
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
          }
        }
      }
      return arr
    }

    bubbleSort([10,7,6,7,9,8,7,10,12])

    /**
     * select Sort
     * 找到最大（小）的， 交换
     */
     let selectSort = (arr) => {
       let len = arr.length
       let minIndex, temp
       for (var i = 0; i < len - 1; i++) {
         minIndex = i
         for (var j = i + 1; j < len; j++) {
           if (arr[j] < a[minIndex]) {
             minIndex = j
           }
         }
         [arr[i], arr[minIndex]] = [arr[i], arr[minIndex]]
       }
       return arr
     }

     selectSort([10,7,6,7,9,8,7,10,12])


     let bubbleSortES6 = (arr) => {
       let len = arr.length
       for (let i = 0; i < len - 1; i++) {
         for (let j = 0; j < len - i - 1; j++) {
           if (arr[j] > arr[j + 1]) {
             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
           }
         }
       }
       return arr
     }

     bubbleSortES6([10,7,6,7,9,8,7,10,12])


     /**
      * shallow copy
      */
     let shallowCopy = (obj) => {
       let tarObj = {}
       for (var i in obj) {
         obj[i] = tarObj[i] 
       }
       return tarObj
     }

     Object.assign({}, obj)
     
