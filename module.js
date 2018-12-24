/*
 * 作用: namespace模式: 简单对象封装
 * 问题: 数据不安全（外部可以直接改变模块内部数据）
 * @Author: lijiahao
 * @Date: 2018-12-21
 */
let myModule = {
  data: 'www.baidu.com',
  foo() {
      console.log(
          `foo() ${this.data}`
      );
  },

  bar() {
      console.log(`bar ${this.data}`);
      
  }
}

myModule.data = 'other data'
myModule.foo()

/*
* 名称: IIFE模式: 匿名函数自调用(闭包)
* 作用: 数据是私有的，外部只能通过暴露的方法操作数据
* 问题: 如果当前模块依赖另一个模块怎么办 无法引入依赖
* @Author: lijiahao
* @Date: 2018-12-21
*/

// index.html文件

{/* <script type="text/javascript" src="module.js"></script>
<script type="text/javascript">
  myModule.foo()
  myModule.bar()
  console.log(myModule.data) //undefined 不能访问模块内部数据
  myModule.data = 'xxxx' //不是修改的模块内部的data
  myModule.foo() //没有改变
</script> */}

(function(window) {
  let data = 'www.baidu.com'
  // 操作数据的函数
  function foo() {
      // 用于暴露函数
      console.log(`foo() ${data}`)
  }

  function bar() {
      // 用于暴露函数
      console.log(`foo() ${data}`)
      otherFunc() //内部调用
  }

  function otherFun() {
      // 内部私有函数
      console.log('otherFun');
  }

  // 暴露行为
  window.myModule = {
      foo,
      bar
  }
})

/*
* 名称: IIFE模式增强： 引入依赖
* 作用: 现代模块化基石
* 问题: 如果当前模块依赖另一个模块怎么办
* @Author: lijiahao
* @Date: 2018-12-21
*/

// module.js

// index.html文件
//  <!-- 引入的js必须有一定顺序 -->
//  <script type="text/javascript" src="jquery-1.10.1.js"></script>
//  <script type="text/javascript" src="module.js"></script>
//  <script type="text/javascript">
//    myModule.foo()
//  </script>

(function(window, $) {
   let data = 'www.baidu.com'

  //  操作数据的函数
  function foo() {
      // 用于暴露函数
      console.log(`foo() ${data}`)
      $('body').css('background', 'red')        
  }

  function bar() {
      // 用于暴露函数
      console.log(`bar() ${data}`)
      otherFun()
  }

  function otherFunc() {
      // 内部私有函数
      console.log(`otherFun()`)
  }

  window.myModule = { foo, bar }
})(window, jQuery)

/** 
 * 上例子通过jquery方法将页面的背景颜色改成红色，所以必须先引入jQuery库，就把这个库当作参数传入。
 *  这样做除了保证模块的独立性，还使得模块之间的依赖关系变得明显。
 */

 /**
  * 模块化好处
  * 
  * 避免命名冲突
  * 更好的分离 按需加载
  * 高复用
  * 高可维护
  */

  /**
   * 带来的问题
   * 引入多个 script 出现的问题
   * 
   * 1、请求过多
   * 2、依赖模糊
   * 3、难以维护
   * 
   * 以上两种原因就导致了很难维护，很可能出现牵一发而动全身的情况导致项目出现严重的问题。
   * 模块化固然有多个好处，然而一个页面需要引入多个js文件，就会出现以上这些问题。而这些问题可以通过模块化规范来解决，下面介绍开发中最流行的commonjs, AMD, ES6, CMD规范。
   */

  const input = document.querySelector('input')
  const obj = {}

  Object.defineProperty(obj, 'data', {
    enumerable: false,  // 不可枚举
    configurable: false, // 不可删除
    set(value){
      input.value = value
      _value = value
      // console.log(input.value)
    },
    get(){
      return _value
    }
  }) 
  obj.data = '123'
  input.onchange = e => {
    obj.data = e.target.value
  }
