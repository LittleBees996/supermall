import axios from 'axios'  //导入axios库

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
// 拦截器的使用 
  instance.interceptors.request.use(config => {         // axios的拦截器    发送请求时拦截
//  1.config内的一下信息不符合服务器要求(服务器有简单的验证) 
//  2.每次发送的网络请求时,都希望在界面显示一个lodaing图标
//  3.某些网络请求,登录(token),必须要携带一些信息
    return config             //config文件处理完成之后需要返回,不然外部获取不到
  }),err => {
    console.log(err);
  }
  instance.interceptors.response.use(res => {     //axios的拦截器   响应时拦截
    return res
  }),err => {
    console.log(err);
  }








  return instance(config)
}