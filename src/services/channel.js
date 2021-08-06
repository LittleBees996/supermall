export default {               //导出
  async getChannels() {         //定义一个异步执行的函数
   let resp = await fetch(        // 定义常量等待执行方法
     '/x/web-interface/web/channel/category/list'         //跨域
     ) 
   let data = await resp.json()                 //定义常量 等待上一个函数的结果然后执行json()
   console.log(data.data.categories);                            //控制台打印结果
   }
 }  