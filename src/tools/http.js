import axios from 'axios'

// 配置全局基础路由
if(process.env.NODE_ENV== "development"){
  // 开发环境
  axios.defaults.baseURL="/api"
}else {
  // 生产环境
  axios.defaults.baseURL="http://localhost:3000/api"
}



axios.interceptors.request.use((config)=>{
  // 获取localStorage里面的对象
  let userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}')
  config.headers.authorization = userInfo.token
  return config
})

axios.interceptors.response.use((response)=>{
  return response.data
})

export default axios

